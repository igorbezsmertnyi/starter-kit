import React from 'react'
import { render, screen } from '@testing-library/react'
import { RootState } from '@/containers/RootState'

let wrapped

beforeEach(() => {
  wrapped = render(<RootState  />)
})

afterEach(() => {
  wrapped.unmount()
})

describe('RootState', () => {
  it('rendered', () => {
    expect(screen.getByTestId('rootState')).toBeInTheDocument()
  })
})
