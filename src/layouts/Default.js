import React from 'react'
import BaseLayout from './Base'
import MainFooter from '../components/MainFooter'
import MainNavigation from '../components/MainNavigation'

const DefaultLayout = ({ children, ...props }) => (
  <BaseLayout {...props}>
    <MainNavigation />
      {children}
    <MainFooter />
  </BaseLayout>
)

export default DefaultLayout
