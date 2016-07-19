'use strict';

let makeFile = require('tiny-build-tool')

let projectsParams = {
  templatePath: './single-project.template.html',
  documentPath: './index2.html',
  renderTarget: '#projects-content',
  contentPath: './projects.json',
  outputPath: './index.html'
}


let toysParams = {
  templatePath: './single-project.template.html',
  documentPath: './index.html',
  renderTarget: '#toys-content',
  contentPath: './toys.json',
}

makeFile(projectsParams)
.then(()=>{
  makeFile(toysParams)
})