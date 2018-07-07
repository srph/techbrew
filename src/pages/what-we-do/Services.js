import React from 'react'
import Jumbotron from '../../components/Jumbotron'
import styled from 'styled-components'
import Container from '../../components/Container'
import vars from '../../variables'

const ui = {
  SectionWrapper: styled.div`
    position: relative;
    background: #090f29;
    padding-top: 160px;
    padding-bottom: 40px;
    z-index: 99;
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
    margin-top: 16px;
    width: 80px;
    margin-right: 32px;
    flex-shrink: 0;
  `,
  ServiceListItemTitle: styled.h4`
    margin-top: 0;
    margin-bottom: 16px;
    text-transform: uppercase;
    color: #fff;
  `,
  ServiceListItemDescription: styled.p`
    margin: 0;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
  `,
}
type Service = {
  name: string,
  description: string,
  icon: string,
}

const services: Array<Service> = [
  {
    name: 'Web Development',
    icon: require('./service-web.svg'),
    description:
      'We build interactive web apps, from data visualizations to extravagant user experiences.',
  },
  {
    name: 'Mobile Development',
    icon: require('./service-mobile.svg'),
    description:
      'Our team delivers smooth mobile apps for both iOS and Android with React Native.',
  },
  {
    name: 'UI/UX Design',
    icon: require('./service-design.svg'),
    description:
      'Not only do we focus on aesthetics, but we also strive for an enjoyable user experience.',
  },
]

const ServicesSection = () => (
  <ui.SectionWrapper>
    <Container>
      <Jumbotron headline="Our Services" alignment="center" mode="dark" />

      <ui.ServiceList>
        {services.map((service, i) => (
          <ui.ServiceListItem key={i}>
            <ui.ServiceListItemIcon>
              <img src={service.icon} />
            </ui.ServiceListItemIcon>
            <div>
              <ui.ServiceListItemTitle>{service.name}</ui.ServiceListItemTitle>
              <ui.ServiceListItemDescription>
                {service.description}
              </ui.ServiceListItemDescription>
            </div>
          </ui.ServiceListItem>
        ))}
      </ui.ServiceList>
    </Container>
  </ui.SectionWrapper>
)

export default ServicesSection
