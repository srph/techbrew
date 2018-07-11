/* @flow */
import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config'

type Props = {
  title: string,
  description: string
}

class PageHelmet extends React.Component<void, Props> {
  render() {
    const {title, description} = this.props
    return (
      <Helmet
        title={title}
        meta={[
          { name: 'title', content: `${config.title} | ${title}` },
          { name: 'og:title', content: `${config.title} | ${title}` },
          { name: 'description', content: description },
          { name: 'og:description', content: description },
        ]}
      />
    )
  }
}

export default PageHelmet
