import React from 'react'
import styled from 'styled-components'
import vars from '../../variables'

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 40px;
`

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 16px;
  text-transform: uppercase;
  width: 400px;
  color: ${vars['color-primary']};
`

const Description = styled.p`
  line-height: 1.7;
  width: 75%;
`

export default class Jumbotron extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>{this.props.title}</Title>
        <Description>{this.props.description}</Description>
      </Wrapper>
    )
  }
}
