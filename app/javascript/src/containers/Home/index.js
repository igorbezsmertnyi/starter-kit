import React from 'react'
import { connect } from 'react-redux'

const Home = ({ server }) => {
  const localTime = new Date(server.dateTime).toLocaleDateString('pl-PL', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div data-testid="homePage">
      <h1>{ localTime }</h1>
    </div>
  )
}

const mapStateToProps = state => ({
  server: state.server
})

export default {
  component: connect(mapStateToProps)(Home),
  selector: '#homePage'
}
