import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import Container from '../Container'
import FA from '../FA'
import vars from '../../variables'

const Footer = styled.div`
  padding-top: 200px;
  padding-bottom: 120px;
  text-align: center;
`

const FooterTitle = styled.h1`
  font-size: 32px;
  margin-top: 0;
  margin-bottom: 16px;
  color: ${vars['color-primary']};
  text-transform: uppercase;
`

const FooterButton = styled.div`
  margin-bottom: 32px;
`

const FooterGoToTop = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  width: 96px;
  color: ${vars['color-primary']};
  background: #fff;
  border-radius: 50%;
  border: 1px solid transparent;
  box-shadow: ${vars['drop-shadow']};
  transition: ${vars['drop-shadow-transition']};
  cursor: pointer;
  font-size: 36px;

  &:hover {
    box-shadow: ${vars['drop-shadow-lower']};
  }
`

export default class MainFooter extends React.Component {
  render() {
    return (
      <Container>
        <Footer>
          <FooterTitle>Have some project for us?</FooterTitle>

          <FooterButton>
            <Button>Let's Chat</Button>
          </FooterButton>

          <FooterGoToTop>
            <FA icon="long-arrow-alt-up" />
          </FooterGoToTop>
        </Footer>
      </Container>
    )
  }
}
