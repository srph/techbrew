import React from 'react'
import MainBackground from '../components/MainBackground'
import { LastLocationProvider } from '../components/LastLocation'


const BaseLayout = ({ children }) => {
  return (
    <LastLocationProvider>
      <MainBackground>{children}</MainBackground>
    </LastLocationProvider>
  )
}

export default BaseLayout
