#!/usr/bin/env bash
# Turn a raw screen recording into the portfolio's card format:
#   public/screen-recordings/<name>.webm  618x400 30fps VP9, no audio
#   public/screen-recordings/<name>.webp  618x400 poster frame
#
# Usage:
#   npm run recording -- <input> <name> [start] [duration]
#
#   start     where to begin in the source, e.g. 2 or 00:00:02.5 (default: 0)
#   duration  how long the clip is in seconds (default: rest of the file)
#
# The source is scaled to cover 618x400 and center-cropped, so record a
# region with roughly that shape (about 1238x800 on a Retina screen).
set -euo pipefail

# The existing cards are 619x400; VP9 needs an even width, so 618 (same box on the page).
WIDTH=618
HEIGHT=400
POSTER_AT=1 # seconds into the finished clip
OUT_DIR="${OUT_DIR:-public/screen-recordings}"
CRF="${CRF:-40}" # VP9 quality: higher = smaller file. Try CRF=46 for busy clips.

if [ $# -lt 2 ]; then
  sed -n '2,13p' "$0" | sed 's/^# \{0,1\}//'
  exit 1
fi

input=$1
name=$2
start=${3:-0}
duration=${4:-}

if [ ! -f "$input" ]; then
  echo "No such file: $input" >&2
  exit 1
fi

mkdir -p "$OUT_DIR"
webm="$OUT_DIR/$name.webm"
webp="$OUT_DIR/$name.webp"

trim=(-ss "$start")
if [ -n "$duration" ]; then trim+=(-t "$duration"); fi

ffmpeg -hide_banner -loglevel error -y "${trim[@]}" -i "$input" \
  -vf "fps=30,scale=$WIDTH:$HEIGHT:force_original_aspect_ratio=increase,crop=$WIDTH:$HEIGHT" \
  -an -c:v libvpx-vp9 -crf "$CRF" -b:v 0 -row-mt 1 \
  "$webm"

# Short clips may not reach POSTER_AT; fall back to the first frame.
# (Read the length from ffmpeg itself; ffprobe isn't always installed.)
# (ffmpeg -i with no output always exits 1, hence the || true.)
clip_len=$( (ffmpeg -hide_banner -i "$webm" 2>&1 || true) |
  awk -F'[:, ]+' '/Duration:/ { print $3 * 3600 + $4 * 60 + $5; exit }')
poster_at=$(awk -v l="${clip_len:-0}" -v p="$POSTER_AT" 'BEGIN { print (l > p) ? p : 0 }')

ffmpeg -hide_banner -loglevel error -y -ss "$poster_at" -i "$webm" \
  -frames:v 1 -c:v libwebp -quality 80 \
  "$webp"

echo "Wrote $webm ($(du -k "$webm" | cut -f1) KB)"
echo "Wrote $webp ($(du -k "$webp" | cut -f1) KB)"
cat <<EOF

Card markup:
    <a class="thing" href="$name/">
      <div class="thing-video-wrapper">
        <video muted loop playsinline data-autoplay poster="/screen-recordings/$name.webp">
          <source src="/screen-recordings/$name.webm" type="video/webm">
        </video>
      </div>
      <div class="thing-content">
        <h3><span>TITLE</span><span>$(date +%Y)</span></h3>
        <p>DESCRIPTION</p>
      </div>
    </a>
EOF
