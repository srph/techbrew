import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'
import Label from '../components/Label'
import salin from './salin.png'

const ui = {
  TileShowcase: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    &:nth-child(odd) {
      flex-direction: row-reverse;
    }
  `,
  TileShowcaseBox: styled.div`
    width: 50%;

    :nth-child(even) {
      padding-right: 8px;
    }

    :nth-child(odd) {
      padding-left: 8px;
    }
  `,
  TileShowcaseBoxContainer: styled.div`
    position: relative;
    padding-top: 50%;
    padding-bottom: 50%;
    height: 0;
    background: gray;
  `,
  TileShowcaseBoxContainerInner: styled.div`
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
  `,
  TileShowcaseBoxTitle: styled.h3`
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 24px;
  `,
  TileShowcaseBoxDescription: styled.p`
    margin-top: 0;
    margin-bottom: 16px;
  `,
}

const IndexPage = () => (
  <div>
    <Jumbotron
      title="We create your ideas to life."
      description={`
        Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na
        bakit kasi jutay cheapangga na ang borta shala ng neuro at ang juts at
        at bakit sa shogal pamin shonget ugmas 48 years ano pamin ng jutay
        krang-krang ng kasi matod at bakit dites quality control.
    `}
    />
    {new Array(3).fill(0).map((_, i) => (
      <ui.TileShowcase>
        <ui.TileShowcaseBox>
          <ui.TileShowcaseBoxContainer>
            <ui.TileShowcaseBoxContainerInner>
              <ui.TileShowcaseBoxTitle>Salin PH 2</ui.TileShowcaseBoxTitle>

              <ui.TileShowcaseBoxDescription>
                A mobile app that allow its user to answer survey in exchange of
                credits.
              </ui.TileShowcaseBoxDescription>

              <Label.Group>
                <Label>Web App</Label>
                <Label>Web App</Label>
                <Label>Web App</Label>
              </Label.Group>
            </ui.TileShowcaseBoxContainerInner>
          </ui.TileShowcaseBoxContainer>
        </ui.TileShowcaseBox>

        <ui.TileShowcaseBox>
          <img src={salin} alt="Salin" />
        </ui.TileShowcaseBox>
      </ui.TileShowcase>
    ))}
  </div>
)

export default IndexPage
