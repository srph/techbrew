/* @flow */
import React from 'react'
import styled from 'styled-components'
import FA from '../../components/FA'
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
    color: ${vars['color-primary']};
  }
`
const CardIcon = styled.div`
  margin-bottom: 16px;
  color: ${vars['color-primary']};
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

type Process = {
  title: string,
  icon: string,
  description: string
}

const list: Array<Process> = [{
  title: 'Prototyping',
  description: 'Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na.',
  icon: 'th-large'
}, {
  title: 'Design',
  description: 'Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na.',
  icon: 'object-ungroup'
}, {
  title: 'Development',
  description: 'Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na.',
  icon: 'code'
}]

function Process() {
  return (
    <Wrapper>
      {list.map((process, i) => (
        <Card key={i}>
          <CardInner>
            <CardIcon>
              <FA icon={process.icon} size='4x' />
            </CardIcon>

            <CardTitle>{process.title}</CardTitle>

            <CardDescription>
              {process.description}
            </CardDescription>
          </CardInner>
        </Card>
      ))}
    </Wrapper>
  )
}

export default Process
