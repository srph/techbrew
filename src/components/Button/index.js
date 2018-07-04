/* @flow */
import React from 'react'
import styled, { css } from 'styled-components'
import vars from '../../variables'
import Link from 'gatsby-link'

type Props = {
  preset: 'gray' | 'primary',
  component: 'a' | 'button',
  spacious: boolean,
}

const Button = ({ component, spacious, preset, ...props }: Props) => {
  const Component = component === 'a' ? Link : component
  return <Component {...props} />
}

Button.defaultProps = {
  preset: 'primary',
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

export default styled(Button)`
  display: inline-block;
  padding: 0;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  height: 48px;
  line-height: 47px;
  border: 1px solid ${vars['color-primary']};
  text-transform: uppercase;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: ${vars['color-primary']};

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
`
