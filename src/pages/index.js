/* @flow */
import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import DefaultLayout from '../layouts/Default'
import Jumbotron from '../components/Jumbotron'
import Label from '../components/Label'
import vars from '../variables'

const ui = {}
ui.TileShowcase = styled.div`
  display: flex;
  margin-bottom: 16px;

  &:nth-child(odd) {
    text-align: right;
    flex-direction: row-reverse;
  }
`
ui.TileShowcaseBox = styled.div`
  width: 50%;

  :first-child {
    padding-right: 8px;
  }

  :last-child {
    padding-left: 8px;
  }

  ${ui.TileShowcase}:nth-child(odd) &:first-child {
    padding-left: 8px;
    padding-right: 0;
  }

  ${ui.TileShowcase}:nth-child(odd) &:last-child {
    padding-left: 0;
    padding-right: 8px;
  }
`
ui.TileShowcaseBoxContainer = styled.div`
  position: relative;
  padding-bottom: calc(100% - 8px);
  height: 0;
`
ui.TileShowcaseBoxContainerInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
`
ui.TileShowcaseBoxTitle = styled.h3`
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 14px;
  font-family: ${vars['font-family-heading']};
  text-transform: uppercase;
`
ui.TileShowcaseBoxDescription = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
`

type Project = {
  title: string,
  description: string,
  thumbnail: string,
  tags?: Array<string>,
}

const list: Array<Project> = [
  {
    title: 'Royal Canin',
    description:
      'Effective pet nutrition. Royal Canin made customer registration and retail management accessible.',
    thumbnail: require('./project-img/salin.png'),
    tags: ['Design', 'Web App', 'React'],
  },
  {
    title: 'Salin',
    description:
      'A mobile app that allow its user to answer survey in exchange of credits.',
    thumbnail: require('./project-img/salin.png'),
    tags: ['Design', 'Mobile App', 'React Native', 'Laravel'],
  },
  {
    title: 'ONE Marketplace',
    description:
      'One Marketplace is the bazaar of a social e-commerce platform that lets you build personal or commercial online stores.',
    thumbnail: require('./project-img/tara.png'),
    tags: ['Web App', 'React'],
  },
  {
    title: 'Tara PMB',
    description:
      'TARA is the intelligent product builder. TARA makes it easier with brilliant human talent and smart project management.',
    thumbnail: require('./project-img/tara.png'),
    tags: ['Web App', 'React'],
  },
  {
    title: 'Ateneo Hacks',
    description:
      'The website for the first HackStrong, an intercollegiate hackathon hosted by Ateneo Universty.',
    thumbnail: require('./project-img/hackstrong.png'),
    tags: ['Design', 'Website', 'React'],
  },
]

const IndexPage = () => (
  <DefaultLayout>
    <Jumbotron
      headline="Brew Tech"
      title="We turn your ideas to life."
      description={`
        We are a digital agency focused on satisfying
        our client's customers with good user experience and
        good technology choices.
    `}
    />

    <Jumbotron
      headline="Our Work"
    />
    {list.map((project, i) => (
      <ui.TileShowcase key={i}>
        <ui.TileShowcaseBox>
          <img src={project.thumbnail} alt="Salin" />
        </ui.TileShowcaseBox>

        <ui.TileShowcaseBox>
          <ui.TileShowcaseBoxContainer>
            <ui.TileShowcaseBoxContainerInner>
              <ui.TileShowcaseBoxTitle>{project.title}</ui.TileShowcaseBoxTitle>

              <ui.TileShowcaseBoxDescription>
                {project.description}
              </ui.TileShowcaseBoxDescription>

              {project.tags && (
                <Label.Group reverse={i % 2 !== 0}>
                  {(i % 2 !== 0 ? [...project.tags].reverse() : project.tags).map((tag, i) => <Label key={i}>{tag}</Label>)}
                </Label.Group>
              )}
            </ui.TileShowcaseBoxContainerInner>
          </ui.TileShowcaseBoxContainer>
        </ui.TileShowcaseBox>
      </ui.TileShowcase>
    ))}
  </DefaultLayout>
)

export default IndexPage
