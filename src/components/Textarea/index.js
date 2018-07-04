import styled from 'styled-components'
import vars from '../../variables'

const Textarea = styled.textarea`
  display: block;
  width: 100%;
  background: #fff;
  padding: 14px 16px;
  border: 1px solid ${vars['color-gray']};
  border-radius: 4px;
  transition: 0.2s all ease;
  outline: 0;

  &:hover,
  &:focus {
    border-color: ${vars['color-blue']};
  }
`

export default Textarea