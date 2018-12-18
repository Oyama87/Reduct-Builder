#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const process = require('process')
const chalk = require('chalk')

const { INDEX, METHODS, HOOKS, RENDER, LOCAL_STATE } = require('./constants')

const lineArgs = process.argv.slice(2)
const fileName = lineArgs[0] || 'SampleComponent'

fs.mkdir(path.resolve(process.cwd(), fileName), (err) => {
  if(err) throw err
  console.log(chalk.blueBright(`${fileName} directory created.`))
  fs.writeFile(path.resolve(process.cwd(), fileName, 'index.js'), INDEX(fileName), (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), fileName, 'methods.js'), METHODS, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), fileName, 'hooks.js'), HOOKS, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), fileName, 'render.js'), RENDER, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), fileName, 'localState.js'), LOCAL_STATE, (error) => {
    if(error) throw error
  })
  fs.writeFile(path.resolve(process.cwd(), fileName, 'styles.css'), `/* your style rules */`, (error) => {
    if(error) throw error
  })
})
