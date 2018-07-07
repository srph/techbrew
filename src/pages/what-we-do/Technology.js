import React from 'react'
import Jumbotron from '../../components/Jumbotron'
import Container from '../../components/Container'
import styled from 'styled-components'
import vars from '../../variables'

const ui = {
  Stack: styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -120px;
    margin-right: -120px;
  `,
  StackItem: styled.div`
    display: flex;
    padding-right: 24px;
    margin-bottom: 24px;
    width: 50%;
  `,
  StackItemLogo: styled.div`
    width: 120px;
    flex-shrink: 0;
    padding-right: 24px;
    margin-top: 8px;
  `,
  StackItemContentHeading: styled.h3`
    margin-top: 0;
    margin-bottom: 4px;
    font-size: 14px;
  `,
  StackItemContentText: styled.p`
    margin-top: 0;
    font-size: 18px;
  `
}

type TechStack = {
  name: string,
  description: string,
  logo: string
}

const list: Array<TechStack> = [{
  name: 'React.js',
  description: 'Our go-to tool for web and mobile development. React is famous for the component pattern in the front-end space.',
  logo: require('./react.svg')
}, {
  name: 'Vue',
  description: 'A team-favorite tool for web-only development. Vue is an opinionated tool for front-end development.',
  logo: require('./vue.png')
}, {
  name: 'Laravel',
  description: 'Laravel made back-end development a delight to work with. Laravel is a PHP framework for artisans.',
  logo: require('./laravel.svg')
}, {
  name: 'Keystone.js',
  description: 'Keystone allows us to build websites with the latest technology.',
  logo: require('./keystone.png')
}]

const Technology = () => (
  <Container>
    <Jumbotron
      headline="Tech Stack"
      description="We selected the best choices to scaffold your ideas."
    />


    <ui.Stack>
      {list.map((tech, i) =>
        <ui.StackItem key={i}>
          <ui.StackItemLogo>
            <img src={tech.logo} alt='React' />
          </ui.StackItemLogo>

          <div>
            <ui.StackItemContentHeading>{tech.name}</ui.StackItemContentHeading>
            <ui.StackItemContentText>{tech.description}</ui.StackItemContentText>
          </div>
        </ui.StackItem>
      )}
      </ui.Stack>
  </Container>
)

export default Technology