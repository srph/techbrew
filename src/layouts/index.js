/* @flow */
import React from 'react'
import Helmet from 'react-helmet'
import config from '../config'
import './fa'
import favicon from '../assets/favicon.png'

type Props = {
  children: () => any
}

const Layout = ({ children }: Props) => (
  <div>
    <Helmet
      titleTemplate={`${config.title} - %s`}
      meta={[
        { property: 'og:site_name', content: config.title },
        { property: 'og:type', content: 'website' },
        { name: 'keywords', content: config.keywords.join(', ') },
      ]}
    >
      <link rel="icon" href={favicon} />
    </Helmet>
    
    {children()}
  </div>
)

export default Layout
