import { defineConfig } from 'vite'
import { existsSync } from 'fs'
import { resolve } from 'path'

const trailingSlashPlugin = () => ({
  name: 'trailing-slash',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url.split('?')[0]
      if (!url.endsWith('/') && !url.includes('.')) {
        const dirPath = resolve(__dirname, '.' + url)
        if (existsSync(dirPath + '/index.html')) {
          res.writeHead(301, { Location: url + '/' })
          res.end()
          return
        }
      }
      next()
    })
  }
})

export default defineConfig({
  root: './',
  appType: 'mpa',
  plugins: [trailingSlashPlugin()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        turtles: './turtles/index.html',
        iconography: './iconography/index.html'
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {}
    }
  }
})

