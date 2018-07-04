import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MainBackground from '../components/MainBackground'
import './fa'


const Layout = ({ children, data }) => (
  <MainBackground>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    {children()}
  </MainBackground>
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
