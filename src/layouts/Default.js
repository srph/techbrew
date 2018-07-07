import React from 'react'
import BaseLayout from './Base'
import MainFooter from '../components/MainFooter'
import MainNavigation from '../components/MainNavigation'
import Container from '../components/Container'

const DefaultLayout = ({ children, ...props }) => (
  <BaseLayout {...props}>
    <Container>
      <MainNavigation />
        {children}
      <MainFooter />
    </Container>
  </BaseLayout>
)

export default DefaultLayout
