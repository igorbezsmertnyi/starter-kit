import { screen } from '@testing-library/react'
import render from '@/helpers/spec/render'
import Home from '@/containers/Home'

let wrapped

const mock = {
  server: {
    date: new Date(),
    time: '00:00:00'
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
    const localTime = mock.server.date.toLocaleDateString('us-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    })

    const text = `${localTime} - 00:00:00` 

    expect(wrapped.getByText(text)).toBeInTheDocument()
  })
})
