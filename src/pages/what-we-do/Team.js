/* @flow */
import React from 'react'
import styled from 'styled-components'
import Container from '../../components/Container'
import Jumbotron from '../../components/Jumbotron'
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
  overflow: hidden;
`
const CardThumbImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${vars['drop-shadow-transition']};

  ${Card}:hover & {
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

type Member = {
  name: string,
  title: string,
  image: string
}

const list: Array<Member> = [{
  name: 'JC Ricaro',
  title: 'Backend Developer',
  image: require('./team-img/jc.jpeg')
}, {
  name: 'Kier Borromeo',
  title: 'Frontend Developer',
  image: require('./team-img/kier.png')
}, {
  name: 'Kirby Borromeo',
  title: 'Designer',
  image: require('./team-img/kirby.png')
}, {
  name: 'Jan Marvin Maniquis',
  title: 'Sales',
  image: require('./team-img/jam.jpg')
}, {
  name: 'Melisa Besana',
  title: 'Customer Care',
  image: require('./team-img/mie.jpg')
}]

function Team() {
  return (
    <Container>
    <Jumbotron
      headline="The Team"
      title="Meet your makers."
    />

      <Wrapper>
        {list.map((member, i) => (
          <Card key={i}>
            <CardThumb>
              <CardThumbImage src={member.image} alt={`${member.name}'s Photo`} />
            </CardThumb>

            <CardName>{member.name}</CardName>
            <CardTitle>{member.title}</CardTitle>
          </Card>
        ))}
      </Wrapper>
    </Container>
  )
}

export default Team
