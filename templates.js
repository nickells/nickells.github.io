
var contentTemplate = 
`<div class="single-project">
  <div class="row">
    <div class="col-md-5 sm-3 project-thumb-container">
      <a href="{{link}}">
        <img src="{{thumbnail}}" class="thumb"/>
      </a>
    </div>
    <div class="col-md-7 sm-9 project-body-container">
      <div class="project-text">
        <h3>{{title}}</h3>
        <p>{{description}}</p>
        <a href="{{link}}"><button class="project-link">See it in action</button></a>
        <a href="{{githubLink}}"><button class="project-link">Github Repo</button></a>
      </div>
    </div>
  </div>
</div>`

let posts = [
  {
    link: 'http://www.breezeblocks.io',
    thumbnail: 'breezeblocks.png',
    title: 'Breezeblocks',
    githubLink: 'http://github.com/',
    description: 'Built with Angular, this app gives users an intuitive drag-and-drop UI for prototyping React Native apps. Layout is converted into a JSON object and sent to the backend, where it is converted into JSX. This code is then uploaded to its own Github repo! This team project was built in fulfillment of the Fullstack Academy curriculum.',
  },
  {
    link: 'http://www.google.com',
    thumbnail: 'blipcrowd.png',
    title: 'Blipcrowd',
    description: 'I made this Also',
    githubLink: 'http://github.com/'
  }
]


let Projects = new Interpolation('content', posts, contentTemplate)