module.exports = function(model) {
  
}

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
