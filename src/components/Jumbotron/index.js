/* @flow */
import React from 'react'
import styled, {css} from 'styled-components'
import vars from '../../variables'

const Wrapper = styled.div`
  padding-top: 64px;
  padding-bottom: 40px;

  ${props => props.spacious && css`
    padding-bottom: 120px;
  `}
`

const Headline = styled.h1` 
  position: relative;
  font-size: 16px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 16px;
  padding-left: 56px;
  text-transform: uppercase;
  font-family: ${vars['font-family-heading']};
  color: ${vars['color-primary']};
`

const HeadlineLine = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 32px;
  height: 2px;
  background: ${vars['color-primary']};
`

const Title = styled.h1`
  font-size: 56px;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 16px;
  font-family: ${vars['font-family-heading-serif']};
`

const Description = styled.p`
  line-height: 1.7;
  width: 75%;
  font-size: 24px;
`

type Props = {
  headline?: string,
  title?: string,
  description?: string
}

export default class Jumbotron extends React.Component<void, Props> {
  render() {
    return (
      <Wrapper spacious={this.props.description && this.props.title}> 
        {this.props.headline && <Headline>
          <HeadlineLine />
          {this.props.headline}
        </Headline>}
        {this.props.title && <Title>{this.props.title}</Title>}
        <Description>{this.props.description}</Description>
      </Wrapper>
    )
  }
}
