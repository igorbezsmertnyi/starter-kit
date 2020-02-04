import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { RootState, getStore } from '@/containers/RootState'

export default (component, state = {}) => {
  render(<RootState initialState={state} />)

  return render(
    <Provider store={getStore()}>
      { React.createElement(component) }
    </Provider>
  )
}
