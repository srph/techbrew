/* @flow */
import React from 'react'
import styled, {css} from 'styled-components'

const ui = {
  InputError: styled(({hidden, ...props}) => <div {...props} />)`
    color: red;
    font-size: 12px;
    margin-top: 4px;
    transition: 0.3s all ease;

    ${props => props.hidden && css`
      opacity: 0;
      transform: translateY(-16px);
    `}

    ${props => !props.hidden && css `
      opacity: 1;
      transform: translateY(0);
    `}
  `,
}

type Props = {
  errors: ?string | Array<string>
}

class InputError extends React.Component<void, Props> {
  render() {
    const error = this.props.errors ? this.props.errors[0] : ''

    return (
      <div>
        {this.props.children}
        <ui.InputError hidden={!error}>{error}</ui.InputError>
      </div>
    )
  }
}

export default InputError