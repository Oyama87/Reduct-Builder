const INDEX = (name) => (
`import React, { Component } from 'react'
import methods from './methods'
import hooks from './hooks'
import render from './render'
import localState from './localState'

export default class ${name || 'SampleComponent'} extends Component {
  constructor() {
    super()
    this.state = localState
    Object.keys(methods).forEach(method => {
      this[method] = methods[method].bind(this)
    })
    Object.keys(hooks).forEach(hook => {
      this[hook] = hooks[hook].bind(this)
    })
    this.render = render.bind(this)
  }
}`)

const METHODS = 
`module.exports = {
  // Write your component methods on this object 
}
`

const HOOKS = 
`module.exports = {
  componentDidMount() {
    // Write your mounting hook here
  },
  
  componentDidUpdate() {
    // Update hook
  },
  
  componentWillUnmount() {
    // Unmounting hook
  }
}`

const RENDER = 
`import React from 'react'
export default function render() {
  return (
    <h1>Component is ready!</h1>
  )
}`

const LOCAL_STATE = 
`module.exports = {
  // This will be your initial state object
}`

module.exports = {
  INDEX,
  METHODS,
  HOOKS,
  RENDER,
  LOCAL_STATE
}
