import React from 'react'
import styled from 'styled-components'
import vars from '../../variables'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: -8px;
  margin-right: -8px;
`
const Card = styled.div`
  width: 33%;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 24px;
  text-align: center;
  transition: ${vars['drop-shadow-transition']};
`
const CardThumb = styled.div`
  position: relative;
  padding-bottom: 100%;
  height: 0;
  margin-bottom: 16px;
`
const CardThumbImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  box-shadow: 0;
  transition: ${vars['drop-shadow-transition']};

  ${CardThumb}:hover & {
    box-shadow: ${vars['drop-shadow-lower']};
  }
`
const CardName = styled.h4`
  margin-top: 0;
  margin-bottom: 4px;
`
const CardTitle = styled.h5`
  margin-top: 0;
  margin-bottom: 0;
  color: gray;
`

function Team() {
  return (
    <Wrapper>
      {new Array(5).fill(0).map((process, i) => (
        <Card key={i}>
          <CardThumb>
            <CardThumbImage src="http://via.placeholder.com/250x250" />
          </CardThumb>

          <CardName>JC Ricaor</CardName>
          <CardTitle>Front-End Developer</CardTitle>
        </Card>
      ))}
    </Wrapper>
  )
}

export default Team
