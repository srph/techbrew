import React from 'react'
import styled from 'styled-components'
import DefaultLayout from '../layouts/Default'
import Jumbotron from '../components/Jumbotron'
import cog from '../icons/cog.svg'

const ui = {
  ProcessCardWrapper: styled.div`
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-bottom: 64px;
  `,
  ProcessCard: styled.div`
    padding-left: 8px;
    padding-right: 8px;
    width: 33%;
  `,
  ProcessCardInner: styled.div`
    padding: 24px;
    text-align: center;
    box-shadow: 0;
    border-radius: 4px;
    transition: all 0.2s cubic-bezier(0.06, 0.67, 0.37, 0.99);

    &:hover {
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      color: red;
    }
  `,
  ProcessCardIcon: styled.div`
    margin-bottom: 16px;
    padding-left: 48px;
    padding-right: 48px;
  `,
  ProcessCardTitle: styled.h3`
    margin-bottom: 24px;
    font-weight: 600;
    text-transform: uppercase;
  `,
  ProcessCardDescription: styled.p`
    color: gray;
    line-height: 1.7;
  `,
  TeamCardWrapper: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around
    margin-left: -8px;
    margin-right: -8px;
  `,
  TeamCard: styled.div`
    width: 33%;
    padding-left: 8px;
    padding-right: 8px;
    margin-bottom: 24px;
    text-align: center;
  `,
  TeamCardThumb: styled.div`
    position: relative;
    padding-bottom: 100%;
    height: 0;
    margin-bottom: 16px;
  `,
  TeamCardThumbImage: styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  `,
  TeamCardName: styled.h4`
    margin-top: 0;
    margin-bottom: 4px;
  `,
  TeamCardTitle: styled.h5`
    margin-top: 0;
    margin-bottom: 0;
    color: gray;
  `
}

const IndexPage = () => (
  <DefaultLayout>
    <Jumbotron
      title="What we do"
      description={`
        Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na
        bakit kasi jutay cheapangga na ang borta shala ng neuro at ang juts at
        at bakit sa shogal pamin shonget ugmas 48 years ano pamin ng jutay
        krang-krang ng kasi matod at bakit dites quality control.
    `}
    />

    <ui.ProcessCardWrapper>
      {new Array(3).fill(0).map((process, i) => (
        <ui.ProcessCard key={i}>
          <ui.ProcessCardInner>
            <ui.ProcessCardIcon>
              <img src={cog} />
            </ui.ProcessCardIcon>

            <ui.ProcessCardTitle>Prototyping</ui.ProcessCardTitle>

            <ui.ProcessCardDescription>
              Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek
              na.
            </ui.ProcessCardDescription>
          </ui.ProcessCardInner>
        </ui.ProcessCard>
      ))}
    </ui.ProcessCardWrapper>

    <ui.TeamCardWrapper>
      {new Array(5).fill(0).map((process, i) => (
        <ui.TeamCard key={i}>
          <ui.TeamCardThumb>
            <ui.TeamCardThumbImage src="http://via.placeholder.com/250x250" />
          </ui.TeamCardThumb>

          <ui.TeamCardName>JC Ricaor</ui.TeamCardName>
          <ui.TeamCardTitle>Front-End Developer</ui.TeamCardTitle>
        </ui.TeamCard>
      ))}
    </ui.TeamCardWrapper>
  </DefaultLayout>
)

export default IndexPage
