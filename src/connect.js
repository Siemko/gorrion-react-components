import React from 'react'
import { getAsync } from './utils'

const Connect = ComposedComponent =>
  class extends React.Component {
    state = { name: "" }

    componentDidMount() {
      setTimeout(() => {
        getAsync('https://api.myjson.com/bins/1gu17b')
          .then(({ name }) => { this.setState({ name: name }) })
      }, 1500)
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          name={this.state.name}
        />
      )
    }
  }

export default Connect;
