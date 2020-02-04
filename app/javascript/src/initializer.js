import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getStore } from './containers/RootState'

import Home from './containers/Home'

window.addEventListener('DOMContentLoaded', () => {
  [
    // Put containers here
    Home
  ].forEach(({ component, selector }) => {
    const nodes = [ ...document.querySelectorAll(selector) ]

    nodes.forEach(node => {
      const data = JSON.parse(node.getAttribute('data') || '{}')

      ReactDOM.render(
        <Provider store={getStore()}>
          { React.createElement(component,  { ...data }) }
        </Provider>,
        node
      )
    })
  })
})
