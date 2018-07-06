/* @flow */
import React from 'react'
import Helmet from 'react-helmet'
import MainBackground from '../components/MainBackground'
import config from '../config'

type Props = {
  children: () => any
}

const Layout = ({ children }: Props) => (
  <MainBackground>
    <Helmet
      titleTemplate={`${config.title} | %s`}
      meta={[
        { charset: 'utf-8' },
        { name: 'og:title', content: config.title },
        { name: 'title', content: config.title },
        { name: 'keywords', content: config.keywords.join(', ') },
      ]}
    />

    {children()}
  </MainBackground>
)

export default Layout