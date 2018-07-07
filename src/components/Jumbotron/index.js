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

  ${props => !props.padding && css`
    padding: 0;
  `}

  ${props => props.alignment === 'center' && css`
    text-align: center; 
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

  ${props => props.alignment === 'center' && css`
    padding-left: 0;
  `}
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
  
  ${props => props.alignment === 'center' && css`
    margin: 0 auto;
    ${'' /* width: 60%; */}
  `}
`

type Props = {
  headline?: string,
  title?: string,
  description?: string,
  alignment: 'center' | 'left' | 'right',
  padding: boolean
}

export default class Jumbotron extends React.Component<void, Props> {
  static defaultProps = {
    padding: true,
    alignment: 'left'
  }

  render() {
    return (
      <Wrapper padding={this.props.padding} spacious={this.props.description && this.props.title} alignment={this.props.alignment}> 
        {this.props.headline && <Headline alignment={this.props.alignment}>
          {this.props.alignment === 'left' && <HeadlineLine />}
          {this.props.headline}
        </Headline>}
        {this.props.title && <Title>{this.props.title}</Title>}
        <Description alignment={this.props.alignment}>{this.props.description}</Description>
      </Wrapper>
    )
  }
}
