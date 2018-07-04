import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import vars from '../../variables'

const Navigation = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
`
const NavigationBranding = styled.a`
  text-decoration: none;
  font-weight: bold;
`
const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  height: 100%;
`
const NavigationLinksItemStrikethrough = styled.div`
  position: absolute;
  top: 50%;
  left: -4px;
  height: 2px;
  width: 0;
  background: ${vars['color-primary']};
  transition: 0.2s all ease;
  transform: translateY(-50%);
`
const NavigationLinksItem = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${vars['color-black']};
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  height: 100%;
  margin-left: 40px;

  &.active > ${NavigationLinksItemStrikethrough},
  &:hover > ${NavigationLinksItemStrikethrough} {
    width: calc(100% + 8px)    
  }
`


export default class MainNavigation extends React.Component {
  render() {
    return (
      <Navigation>
        <NavigationBranding to="/">Brew Tech</NavigationBranding>

        <NavigationLinks>
          <NavigationLinksItem to="/" activeClassName="active" exact first>
            Our Work
            <NavigationLinksItemStrikethrough />
          </NavigationLinksItem>

          <NavigationLinksItem activeClassName="active" to="/what-we-do">
            What We Do
            <NavigationLinksItemStrikethrough />
          </NavigationLinksItem>

          <NavigationLinksItem activeClassName="active" to="/contact">
            Contact Us
            <NavigationLinksItemStrikethrough />
          </NavigationLinksItem>
        </NavigationLinks>
      </Navigation>
    )
  }
}
