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
        { name: 'og:title', content: config.title },
        { name: 'title', content: config.title },
        { name: 'keywords', content: config.keywords.join(', ') },
      ]}
    />
    
    {children()}
  </div>
)

export default Layout