import React from 'react'

export default class WorkerInfo extends React.Component {
  state = { worker: null }
  
  componentDidMount() {
    // We can make an ajax call here, for e.g.
    setTimeout(() => this.setState({
      worker: `Hi, I am ${this.props.name} and I am proud to work for ${this.props.employer}`
    }), 2500);
  }
  
  render() {
    // Render the children with a function using state as the argument
    return this.props.children(this.state.worker);
  }
}