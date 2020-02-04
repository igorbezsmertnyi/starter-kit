import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import reducers from '@/reducers'

let store
const logger = createLogger()

export const getStore = () => store

export const RootState = ({ initialState = {} }) => {
  store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise, logger, thunk)
  )

  return (
    <span data-testid="rootState" />
  )
}

window.addEventListener('DOMContentLoaded', () => {
  const node = document.querySelector('#rootState')
  const data = JSON.parse(node.getAttribute('data') || '{}')

  ReactDOM.render(
    <RootState initialState={data} />,
    node
  )
})
