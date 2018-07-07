import styled from 'styled-components'
import vars from '../../variables'

const Input = styled.input`
  display: block;
  width: 100%;
  background: #fff;
  height: auto;
  padding: 14px 16px;
  border: 1px solid ${vars['color-gray']};
  border-radius: 4px;
  font-size: 18px;
  transition: 0.2s all ease;
  outline: 0;

  &:hover,
  &:focus {
    border-color: ${vars['color-blue']};
  }
`

export default Input