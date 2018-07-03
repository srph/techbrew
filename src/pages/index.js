import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import salin from './salin.png'
import arrowup from '../icons/arrow-thin-up.svg'

const ui = {
  Container: styled.div`
    max-width: 820px;
    margin: 0 auto;
    padding-left: 16px;
    padding-right: 16px;
  `,
  Navigation: styled.div`
    padding-top: 16px;
    padding-bottom: 16px;
    display: flex;
    align-items: center;
    height: 50px;
  `,
  NavigationBranding: styled.a`
    text-decoration: none;
    font-weight: bold;
  `,
  NavigationLinks: styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
  `,
  NavigationLinksItem: styled.a`
    position: relative;
    color: var(--color-black);
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 16px;
  `,
  NavigationLinksItemStrikethrough: styled.div`
    position: absolute;
    top: 7px;
    left: -4px;
    height: 2px;
    width: ${props => props.active ? 'calc(100% + 8px)' : 0};
    background: var(--color-black);
    transition: 0.2s all ease;
  `,
  Jumbotron: styled.div`
    padding-top: 64px;
    padding-bottom: 40px;
  `,
  JumbotronTitle: styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 16px;
    text-transform: uppercase;
    width: 400px;
  `,
  JumbotronDescription: styled.p`
    line-height: 1.7;
    color: var(--color-gray);
    width: 75%;
  `,
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
  Label: styled.span`
    display: inline-block;
    border-radius: 3px;
    height: 22px;
    line-height: 21px;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 10px;
    border: 1px solid #000; 
    text-transform: uppercase;
    font-weight: bold;
  `,
  LabelGroup: styled.div`
    display: flex;

    span:not(:last-child) {
      margin-right: 8px;
    }
  `,
  Footer: styled.div`
    padding-top: 80px;
    padding-bottom: 40px;
    text-align: center;
  `,
  FooterTitle: styled.h1`
    font-size: 32px;
    margin-top: 0;
    margin-bottom: 16px;
    color: var(--color-primary);
    text-transform: uppercase;
  `,
  FooterButton: styled.div`
    margin-bottom: 32px;
  `,
  Button: styled.button`
    display: inline-block;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 4px;
    height: 36px;
    line-height: 35px;
    border: 1px solid var(--color-primary);
    text-transform: uppercase;
    background: transparent;
    font-size: 24px;
    font-weight: 600;
    cursor: pointer;
  `,
  GoToTop: styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
    width: 96px;
    color: var(--color-primary);
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0,0,0,.1);
    transition: all .2s cubic-bezier(.06,.67,.37,.99);
    cursor: pointer;

    &:hover {
      box-shadow: 0px 4px 4px rgba(0,0,0,.1);
    }
  `
}

const IndexPage = () => (
  <ui.Container>
    <ui.Navigation>
      <ui.NavigationBranding href="/">
        Brew Tech
      </ui.NavigationBranding>

      <ui.NavigationLinks>
        <ui.NavigationLinksItem href="/" first>
          Our Work
          <ui.NavigationLinksItemStrikethrough active />
        </ui.NavigationLinksItem>

        <ui.NavigationLinksItem href="/">
          What We Do
          <ui.NavigationLinksItemStrikethrough />
        </ui.NavigationLinksItem>

        <ui.NavigationLinksItem href="/">
          Contact Us
          <ui.NavigationLinksItemStrikethrough />
        </ui.NavigationLinksItem>
      </ui.NavigationLinks>
    </ui.Navigation>

    <ui.Jumbotron>
      <ui.JumbotronTitle>
        We create your ideas to life.
      </ui.JumbotronTitle>

      <ui.JumbotronDescription>
        Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na bakit kasi jutay cheapangga na ang borta shala ng neuro at ang juts at at bakit sa shogal pamin shonget ugmas 48 years ano pamin ng jutay krang-krang ng kasi matod at bakit dites quality control.
      </ui.JumbotronDescription>
    </ui.Jumbotron>

    {new Array(3).fill(0).map((_, i) =>
      <ui.TileShowcase>
        <ui.TileShowcaseBox>
          <ui.TileShowcaseBoxContainer>
            <ui.TileShowcaseBoxContainerInner>
              <ui.TileShowcaseBoxTitle>
                Salin PH 2
              </ui.TileShowcaseBoxTitle>

              <ui.TileShowcaseBoxDescription>
                A mobile app that allow its user to answer
                survey in exchange of credits.
              </ui.TileShowcaseBoxDescription>

              <ui.LabelGroup>
                <ui.Label>Web App</ui.Label>
                <ui.Label>Web App</ui.Label>
                <ui.Label>Web App</ui.Label>
              </ui.LabelGroup>
            </ui.TileShowcaseBoxContainerInner>
          </ui.TileShowcaseBoxContainer>
        </ui.TileShowcaseBox>
        
        <ui.TileShowcaseBox>
          <img src={salin} alt="Salin" />
        </ui.TileShowcaseBox>
      </ui.TileShowcase>
    )}

    <ui.Footer>
      <ui.FooterTitle>
        Have some project for us?
      </ui.FooterTitle>

      <ui.FooterButton>
        <ui.Button>
          Let's Chat
        </ui.Button>
      </ui.FooterButton>

      <ui.GoToTop>
        <img src={arrowup} style={{ width: 32}} />
      </ui.GoToTop>
    </ui.Footer>
  </ui.Container>
)

export default IndexPage
