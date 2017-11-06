import React from 'react'

const Greeting = ({ name, ...props }) => {
  if (!name) {
    return <div>Loading...</div>
  }
  return <div {...props}>Hi {name}!</div>
}
export default Greeting