import React from 'react'
import styled from 'styled-components'

const StyledCounter = styled.div`
   background-size:cover;
   background:papayawhip;
   scrollOverflow:true;
   padding: 20em;
`;
const Paragraph = styled.p`
  color:palevioletred;
  font-size:1em;
`;
const Button = styled.button`
  background:white;
  color:palevioletred;
  font-size:1em;
  padding:.25em 1em;
  border:2px solid palevioletred;
  border-radius:3px;
`

export default class Counter extends React.Component {
  state = { count: 0 }

  increment = () => this.setState({ count: this.state.count + 1 })
  decrement = () => this.setState({ count: this.state.count - 1 })

  render() {
    return (
      <StyledCounter>
        <Paragraph>{this.state.count}</Paragraph>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
      </StyledCounter>
    )
  }
}
