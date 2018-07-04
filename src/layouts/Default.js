import React from 'react'
import MainFooter from '../components/MainFooter'
import MainNavigation from '../components/MainNavigation'
import Container from '../components/Container'

const DefaultLayout = ({ children }) => (
  <Container>
    <MainNavigation />
      {children}
    <MainFooter />
  </Container>
)

export default DefaultLayout
