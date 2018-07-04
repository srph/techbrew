import React from 'react'
import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'
import Container from '../components/Container'
import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'

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
        <Button>Close</Button>
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

        <Textarea placeholder="Your message..." />
      </ui.FormFields>

      <ui.FormAction>
        <Button>Send Message</Button>
      </ui.FormAction>
    </ui.Wrapper>
  </Container>
)

export default IndexPage
