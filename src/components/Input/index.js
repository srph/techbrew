import styled from 'styled-components'

const Input = styled.input`
  display: block;
  width: 100%;
  background: #fff;
  height: auto;
  padding: 14px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: 0.2s all ease;
  outline: 0;

  &:hover,
  &:focus {
    border-color: blue;
  }
`

export default Input