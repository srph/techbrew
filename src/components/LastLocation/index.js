import React from 'react'
import {withRouter} from 'react-router'

import createReactContext from 'create-react-context'
const Context = createReactContext()

class LastLocationProvider extends React.Component {
  state = {
    location: null
  }

  componentWillReceiveProps(nextProps) {
    console.log('hehe', nextProps)

    if (this.state.location !== nextProps.location) {
      this.setState({
        location: this.props.location
      })
    }
  }

  render() {
    return (
      <Context.Provider value={this.state.location}>{this.props.children}</Context.Provider>
    )
  }
}

const LastLocationProviderWithRouter = withRouter(LastLocationProvider)

function withLastLocation(Component) {
  return class extends React.Component {
    static displayName = `withLastLocation(${Component.displayName})`

    render() {
      return <Context.Consumer>{location => <Component {...this.props} lastLocation={location} />}</Context.Consumer>
    }
  }
}

export {
  withLastLocation,
  LastLocationProviderWithRouter as LastLocationProvider
}