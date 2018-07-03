import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import MainFooter from '../components/MainFooter'
import MainNavigation from '../components/MainNavigation'

import './index.css'
import './normalize.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Container>
      <MainNavigation />
      {children()}
      <MainFooter />
    </Container>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
