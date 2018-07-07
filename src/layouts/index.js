/* @flow */
import React from 'react'
import Helmet from 'react-helmet'
import config from '../config'
import './fa'

type Props = {
  children: () => any
}

const Layout = ({ children }: Props) => (
  <div>
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
  </div>
)

export default Layout