import React from 'react'
import DefaultLayout from '../../layouts/Default'
import Jumbotron from '../../components/Jumbotron'
import Team from './Team'
import Process from './Process'
import PageHelmet from '../../components/PageHelmet'
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
    display: flex;
    box-shadow: ${vars['drop-shadow']};
  `,
  ServiceListItem: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 240px;
    border-right: 1px solid ${vars['color-gray']};
    padding: 48px;
    text-align: center;
    background: #fff;
    width: 33.33%;
    
    :last-child {
      border-right: 0;
    }
  `,
  ServiceListItemHeading: styled.h4`
    font-size: 14px;
    text-transform: uppercase;
    font-family: ${vars['font-family-heading']};
    margin-top: 0;
    margin-bottom: 4px;
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

type Service = {
  name: string,
  description: string,
  icon: string
}

const services: Array<Service> = [{
  name: 'Web Development',
  icon: '',
  description: 'We build interactive web apps.'
}, {
  name: 'Mobile Development',
  icon: '',
  description: 'We build interactive web apps.'
}, {
  name: 'UI/UX Design',
  icon: '',
  description: 'We build interactive web apps.'
}]

const WhatWeDoPage = () => (
  <div>
    <PageHelmet title="What we do" description={"Learn about our process and technologies we use. Meet the team as well!"} />

    <Jumbotron
      headline="What We Do"
      title="Good UI and Code."
      description={`
        We can help you build your idea from prototype to launch. We make websites,
        web apps, and mobile apps.
    `}
    />

    <Jumbotron
      headline="Our Services"
    />

    <ui.ServiceList>
      {services.map((service, i) =>
        <ui.ServiceListItem key={i}>
          <ui.ServiceListItemHeading>{service.name}</ui.ServiceListItemHeading>
        </ui.ServiceListItem>
      )}
    </ui.ServiceList>

    <Jumbotron
      headline="Our Process"
      description={`
        From start to finish, 
    `}
    />

    <Process />

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

    <Jumbotron
      headline="The Team"
      title="Meet your makers."
    />
    <Team />
  </div>
)

const WhatWeDoPageWithLayout = props => (
  <DefaultLayout>
    <WhatWeDoPage {...props} />
  </DefaultLayout>
)

export default WhatWeDoPageWithLayout
