import React from 'react'
import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'
import Container from '../components/Container'
import BaseLayout from '../layouts/Base'
import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import FA from '../components/FA'
import PageHelmet from '../components/PageHelmet'
import {withLastLocation} from '../components/LastLocation'

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

class ContactPage extends React.Component {
  state = {
    email: '',
    subject: '',
    body: '',
    loading: false
  }

  render() {
    window.h = this.props.history

    return (
      <Container>
        <PageHelmet
          title="Contact Us"
          description={'Send business inquires or just drop by to say hi!'}
        />

        <ui.Wrapper>
          <ui.CloseButton>
            <Button size="large" onClick={this.handleClose}>
              <Button.IconContainer>
                <Button.Icon>
                  <FA icon="times" />
                </Button.Icon>
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
            <Button spacious preset="gray" size="large">
              <Button.IconContainer>
                <Button.IconText>Send Message</Button.IconText>
                <Button.Icon>
                  <FA icon="long-arrow-alt-right" size="2x" />
                </Button.Icon>
              </Button.IconContainer>
            </Button>
          </ui.FormAction>
        </ui.Wrapper>
      </Container>
    )
  }

  handleClose = () => {
    console.log(this.props)
    
    if (this.props.lastLocation) {
      this.props.history.goBack()
    } else {
      this.props.history.push('/')
    }
  }

  handleSubmit = evt => {
    evt.preventDefault()

    this.setState({
      loading: true
    })
  }
}

const ContactPageWithLastLocation = withLastLocation(ContactPage)

const ContactPageWithLayout = props => (
  <BaseLayout {...props}>
    <ContactPageWithLastLocation {...props} />
  </BaseLayout>
)

export default ContactPageWithLayout