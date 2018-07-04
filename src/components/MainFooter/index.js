import React from 'react'
import styled from 'styled-components'
import Button from '../Button'
import FA from '../FA'
import vars from '../../variables'

const Footer = styled.div`
  padding-top: 80px;
  padding-bottom: 40px;
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
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s cubic-bezier(0.06, 0.67, 0.37, 0.99);
  cursor: pointer;
  font-size: 36px;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
`

export default class MainFooter extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTitle>Have some project for us?</FooterTitle>

        <FooterButton>
          <Button>Let's Chat</Button>
        </FooterButton>

        <FooterGoToTop>
          <FA icon="long-arrow-alt-up" />
        </FooterGoToTop>
      </Footer>
    )
  }
}
