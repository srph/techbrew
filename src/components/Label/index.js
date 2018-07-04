import React from 'react'
import styled, {css} from 'styled-components'

const Label = styled.span`
  display: inline-block;
  border-radius: 3px;
  height: 22px;
  line-height: 21px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 10px;
  border: 1px solid #000;
  text-transform: uppercase;
  font-weight: bold;
`

Label.Group = styled.div`
  ${'' /* display: flex;
  flex-wrap: wrap; */}

  span:not(:last-child) {
    margin-right: 8px;
  }

  ${Label} {
    margin-bottom: 8px;
  }

  ${props => props.reverse && css`
    flex-direction: row-reverse;

    ${Label}:not(:last-child) {
      margin-left: 8px;
      margin-right: 0;
    }
  `}
`

export default Label
