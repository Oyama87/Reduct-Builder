#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const process = require('process')
const chalk = require('chalk')

const { INDEX, METHODS, HOOKS, RENDER, LOCAL_STATE } = require('./constants')

const lineArgs = process.argv.slice(2)
const pathName = lineArgs[0] || 'SampleComponent'
const componentName = pathName.split('/').slice(-1)

fs.mkdir(path.resolve(process.cwd(), pathName), {recursive: true}, (err) => {
  if(err) throw err
  console.log(chalk.blueBright(`${componentName} directory created.`))
  fs.writeFile(path.resolve(process.cwd(), pathName, 'index.js'), INDEX(componentName), (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), pathName, 'methods.js'), METHODS, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), pathName, 'hooks.js'), HOOKS, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), pathName, 'render.js'), RENDER, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), pathName, 'localState.js'), LOCAL_STATE, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), pathName, 'styles.css'), `/* your style rules */`, (error) => {
    if(error) throw error
  })
})
