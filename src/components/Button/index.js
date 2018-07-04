import styled from 'styled-components'
import vars from '../../variables'

export default styled.button`
  display: inline-block;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  height: 36px;
  line-height: 35px;
  border: 1px solid ${vars['color-primary']};
  text-transform: uppercase;
  background: transparent;
  line-height: 1;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
`
