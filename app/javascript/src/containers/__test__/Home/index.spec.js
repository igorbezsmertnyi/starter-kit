import { screen } from '@testing-library/react'
import render from '@/helpers/spec/render'
import Home from '@/containers/Home'

let wrapped

const mock = {
  server: {
    dateTime: new Date()
  }
}

beforeEach(() => {
  wrapped = render(Home.component, mock)
})

afterEach(() => {
  wrapped.unmount()
})

describe('HomePage', () => {
  it('rendered', () => {
    expect(screen.getByTestId('homePage')).toBeInTheDocument()
  })

  it('display dateTime', () => {
    const localTime = mock.server.dateTime.toLocaleDateString('us-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })

    expect(wrapped.getByText(localTime)).toBeInTheDocument()
  })
})
