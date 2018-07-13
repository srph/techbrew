import React from 'react'
import DefaultLayout from '../../layouts/Default'
import Jumbotron from '../../components/Jumbotron'
import Team from './Team'
import Process from './Process'
import Services from './Services'
import Technology from './Technology'
import PageHelmet from '../../components/PageHelmet'
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
  `,
  ServiceList: styled.div`
    margin-left: -80px;
    margin-right: -80px;
    margin-bottom: 80px;
  `,
  ServiceListItem: styled.div`
    display: flex;
    margin-bottom: 64px;
    width: 50%;

    :nth-child(even) {
      padding-left: 24px;
      margin-left: 50%;
    }

    :nth-child(odd) {
      padding-right: 24px;
    }
  `,
  ServiceListItemIcon: styled.div`
    margin-right: 32px;
  `,
  ServiceListItemTitle: styled.h4`
    margin-top: 0;
    margin-bottom: 16px;
    text-transform: uppercase;
  `,
  ServiceListItemDescription: styled.p`
    margin: 0;
    font-size: 18px;
    color: ${vars['color-dark-gray']};
  `,
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

type Service = {
  name: string,
  description: string,
  icon: string
}

const services: Array<Service> = [{
  name: 'Web Development',
  icon: '',
  description: 'We build interactive web apps, from data visualizations to extravagant user experiences.'
}, {
  name: 'Mobile Development',
  icon: '',
  description: 'Our team delivers mobile apps for both iOS and Android with React Native.'
}, {
  name: 'UI/UX Design',
  icon: '',
  description: 'Not only do we focus on aesthetics, but we also strive for an enjoyable user experience.'
}]

const WhatWeDoPage = () => (
  <div>
    <PageHelmet title="What We Do" description={"Learn about what we can do for your team and how we do it as well."} />

    <Container>
      <Jumbotron
        headline="What We Do"
        title="Good UI and Code."
        description={`
          We can help you build your idea from prototype to launch. We make websites,
          web apps, and mobile apps.
      `}
      />
    </Container>

    <Process />

    <Services />

    <Technology />

    <Team />
  </div>
)

const WhatWeDoPageWithLayout = props => (
  <DefaultLayout>
    <WhatWeDoPage {...props} />
  </DefaultLayout>
)

export default WhatWeDoPageWithLayout
