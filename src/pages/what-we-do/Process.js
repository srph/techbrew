import React from 'react'
import styled from 'styled-components'
import cog from '../../icons/cog.svg'
import vars from '../../variables'

const Wrapper = styled.div`
  display: flex;
  margin-left: -8px;
  margin-right: -8px;
  margin-bottom: 64px;
`
const Card = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  width: 33%;
`
const CardInner = styled.div`
  padding: 24px;
  text-align: center;
  box-shadow: 0;
  border-radius: 4px;
  transition: all 0.2s cubic-bezier(0.06, 0.67, 0.37, 0.99);

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    color: red;
  }
`
const CardIcon = styled.div`
  margin-bottom: 16px;
  padding-left: 48px;
  padding-right: 48px;
`
const CardTitle = styled.h3`
  margin-bottom: 24px;
  font-weight: 600;
  text-transform: uppercase;
`
const CardDescription = styled.p`
  color: gray;
  line-height: 1.7;
`

function Process() {
  return (
    <Wrapper>
      {new Array(3).fill(0).map((process, i) => (
        <Card key={i}>
          <CardInner>
            <CardIcon>
              <img src={cog} />
            </CardIcon>

            <CardTitle>Prototyping</CardTitle>

            <CardDescription>
              Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek
              na.
            </CardDescription>
          </CardInner>
        </Card>
      ))}
    </Wrapper>
  )
}

export default Process
