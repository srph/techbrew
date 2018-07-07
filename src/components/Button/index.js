/* @flow */
import React from 'react'
import styled, { css, keyframes} from 'styled-components'
import vars from '../../variables'
import Link from 'gatsby-link'

type Props = {
  preset: 'gray' | 'primary',
  component: 'a' | 'button',
  size: 'large' | 'medium',
  spacious: boolean,
}

const Button = ({ component, spacious, preset, size, loading, disabled, title, ...props }: Props) => {
  const Component = component === 'a' ? Link : component
  return <Component {...props} disabled={loading || disabled} title={loading ? 'Loading...' : title} />
}

Button.defaultProps = {
  preset: 'primary',
  size: 'medium',
  component: 'button',
}

Button.IconContainer = styled.div`
  display: flex;
  align-items: center;
`

Button.Icon = styled.div`
  line-height: 1;

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }
`

Button.IconText = ({ children }) => <span>{children}</span>

const loading = keyframes`
  0% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.4;
  }
`

export default styled(Button)`
  display: inline-block;
  padding: 0;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 4px;
  height: ${vars['form-size']}px;
  line-height: ${vars['form-size'] - 1}px;
  border: 1px solid ${vars['color-primary']};
  text-transform: uppercase;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: ${vars['color-primary']};
  outline: 0;
  transition: 0.2s all ease;  

  :focus {
    box-shadow: 0 0 0 2px ${vars['color-gray']}
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${props => props.loading && css`
    animation: ${loading} 2s linear infinite;
  `}

  ${props =>
    props.spacious &&
    css`
      ${Button.Icon}:first-child {
        margin-right: 24px;
      }

      ${Button.Icon}:last-child {
        margin-left: 48px;
      }
    `};

  ${props =>
    props.preset === 'gray' &&
    css`
      color: ${vars['color-dark-gray']};
      border-color: ${vars['color-dark-gray']};
    `};

  ${props => props.size === 'large' && css`
    height: ${vars['form-size-large']}px
    line-height: ${vars['form-size-large'] - 1}px
  `}
`
