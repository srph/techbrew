import React from 'react'
import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'
import Container from '../components/Container'
import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import FA from '../components/FA'

const ui = {
  Wrapper: styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
  `,
  CloseButton: styled.div`
    margin-bottom: 40px;
  `,
  FormFields: styled.div`
    margin-bottom: 32px;
  `,
  FormFieldsInfo: styled.div`
    display: flex;
  `,
  FormFieldsInfoSection: styled.div`
    width: 100%;
    margin-bottom: 16px;
    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }
  `,
  FormAction: styled.div`
    text-align: right;
  `,
}

const IndexPage = () => (
  <Container>
    <ui.Wrapper>
      <ui.CloseButton>
        <Button component="a" to="/" size='large'>
          <Button.IconContainer>
            <Button.Icon><FA icon='times' /></Button.Icon>
            <Button.IconText>Close</Button.IconText>
          </Button.IconContainer>
        </Button>
      </ui.CloseButton>

      <Jumbotron
        title="Say Hi!"
        description={`
          Let's create something together
      `}
      />
      <ui.FormFields>
        <ui.FormFieldsInfo>
          <ui.FormFieldsInfoSection>
            <Input placeholder="Your name" />
          </ui.FormFieldsInfoSection>

          <ui.FormFieldsInfoSection>
            <Input placeholder="Your email" />
          </ui.FormFieldsInfoSection>
        </ui.FormFieldsInfo>

        <Textarea rows="8" placeholder="Your message..." />
      </ui.FormFields>

      <ui.FormAction>
        <Button spacious preset='gray' size='large'>
          <Button.IconContainer>
            <Button.IconText>Send Message</Button.IconText>
            <Button.Icon><FA icon='long-arrow-alt-right' size="2x" /></Button.Icon>
          </Button.IconContainer>
        </Button>
      </ui.FormAction>
    </ui.Wrapper>
  </Container>
)

export default IndexPage
