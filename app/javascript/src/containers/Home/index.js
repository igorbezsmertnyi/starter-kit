import React from 'react'
import { connect } from 'react-redux'

const Home = ({ server }) => {
  const localTime = new Date(server.date).toLocaleDateString('us-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <div data-testid="homePage">
      <h1>{ localTime } - { server.time }</h1>
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
