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
  align-items: center;
  margin-bottom: 16px;

  &:nth-child(odd) {
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
  padding-top: 50%;
  padding-bottom: 50%;
  height: 0;
  background: ${vars['color-gray']};
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
  font-size: 24px;
`
ui.TileShowcaseBoxDescription = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
`

type Project = {
  title: string,
  description: string,
  thumbnail: string,
  tags?: Array<string>,
}

const list: Array<Project> = [
  {
    title: 'Salin',
    description:
      'A mobile app that allow its user to answer survey in exchange of credits.',
    thumbnail: require('./project-img/salin.png'),
    tags: ['Design', 'Mobile App', 'React Native', 'Laravel'],
  },
  {
    title: 'Tara',
    description:
      'A mobile app that allow its user to answer survey in exchange of credits.',
    thumbnail: require('./project-img/tara.png'),
    tags: ['Web App', 'React'],
  },
  {
    title: 'Ateneo Hacks',
    description:
      'A mobile app that allow its user to answer survey in exchange of credits.',
    thumbnail: require('./project-img/hackstrong.png'),
    tags: ['Design', 'Website'],
  },
]

const IndexPage = () => (
  <DefaultLayout>
    <Jumbotron
      title="We create your ideas to life."
      description={`
        Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na
        bakit kasi jutay cheapangga na ang borta shala ng neuro at ang juts at
        at bakit sa shogal pamin shonget ugmas 48 years ano pamin ng jutay
        krang-krang ng kasi matod at bakit dites quality control.
    `}
    />
    {list.map((project, i) => (
      <ui.TileShowcase>
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
                <Label.Group>
                  {project.tags.map((tag, i) => <Label key={i}>{tag}</Label>)}
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
