/* @flow */
import React from 'react'
import Helmet from 'react-helmet'
import {withRouter} from 'react-router'
import config from '../../config'

type RouterProps = {
  location: {
    pathname: string
  }
}

type OwnProps = {
  title: string,
  description: string
}

type Props = RouterProps & OwnProps

class PageHelmet extends React.Component<void, Props> {
  render() {
    const {title, description} = this.props
    return (
      <Helmet
        title={title}
        meta={[
          { property: 'og:url', content: `https://techbrewlabs.com${this.props.location.pathname}` },
          { name: 'title', content: `${config.title} | ${title}` },
          { property: 'og:title', content: `${config.title} | ${title}` },
          { name: 'description', content: description },
          { property: 'og:description', content: description },
        ]}
      />
    )
  }
}

export default withRouter(PageHelmet)
