import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Navigation = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  align-items: center;
  height: 50px;
`
const NavigationBranding = styled.a`
  text-decoration: none;
  font-weight: bold;
`
const NavigationLinks = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`
const NavigationLinksItemStrikethrough = styled.div`
  position: absolute;
  top: 7px;
  left: -4px;
  height: 2px;
  width: 0;
  background: #8d99c6;
  transition: 0.2s all ease;
`
const NavigationLinksItem = styled(Link)`
  position: relative;
  color: var(--color-black);
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  margin-left: 16px;

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
