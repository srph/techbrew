import React from 'react'
import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'
import Container from '../components/Container'
import BaseLayout from '../layouts/Base'
import Button from '../components/Button'
import Input from '../components/Input'
import Textarea from '../components/Textarea'
import FA from '../components/FA'
import vars from '../variables'
import PageHelmet from '../components/PageHelmet'
import { withLastLocation } from '../components/LastLocation'
import linkState from 'linkstate'
import axios from 'axios'

const ui = {
  Wrapper: styled.div`
    padding-top: 40px;
    padding-bottom: 120px;
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
  Success: styled.h1`
    margin: 0;
    padding-top: 120px;
    font-size: 56px;
    font-family: ${vars['font-family-heading-serif']};
    text-align: center;
  `,
}

class ContactPage extends React.Component {
  state = {
    email: '',
    subject: '',
    body: '',
    loading: false,
    success: false,
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
            <Button
              size="large"
              onClick={this.handleClose}
              disabled={this.state.loading}
            >
              <Button.IconContainer>
                <Button.Icon>
                  <FA icon="times" />
                </Button.Icon>
                <Button.IconText>Close</Button.IconText>
              </Button.IconContainer>
            </Button>
          </ui.CloseButton>

          {this.state.success && (
            <Jumbotron
              headline="Arigathanks!"
              title="We'll be in touch."
              alignment='center'
            />
          )}

          {!this.state.success && (
            <Jumbotron
              title="Say Hi!"
              description={`
          Let's create something together
      `}
            />
          )}
          {!this.state.success && (
            <form onSubmit={this.handleSubmit}>
              <ui.FormFields>
                <ui.FormFieldsInfo>
                  <ui.FormFieldsInfoSection>
                    <Input
                      placeholder="Your name"
                      onChange={linkState(this, 'name')}
                      value={this.state.name}
                    />
                  </ui.FormFieldsInfoSection>

                  <ui.FormFieldsInfoSection>
                    <Input
                      placeholder="Your email"
                      type="email"
                      onChange={linkState(this, 'email')}
                      value={this.state.email}
                    />
                  </ui.FormFieldsInfoSection>
                </ui.FormFieldsInfo>

                <Textarea
                  rows="8"
                  placeholder="Your message..."
                  onChange={linkState(this, 'body')}
                  value={this.state.body}
                />
              </ui.FormFields>

              <ui.FormAction>
                <Button
                  spacious
                  preset="gray"
                  size="large"
                  disabled={this.state.loading}
                >
                  <Button.IconContainer>
                    <Button.IconText>Send Message</Button.IconText>
                    <Button.Icon>
                      <FA icon="long-arrow-alt-right" size="2x" />
                    </Button.Icon>
                  </Button.IconContainer>
                </Button>
              </ui.FormAction>
            </form>
          )}
        </ui.Wrapper>
      </Container>
    )
  }

  handleClose = () => {
    if (this.props.lastLocation) {
      this.props.history.goBack()
    } else {
      this.props.history.push('/')
    }
  }

  handleSubmit = evt => {
    evt.preventDefault()

    if (this.state.loading) {
      return
    }

    this.setState({
      loading: true,
    })

    axios
      .post(
        'https://discordapp.com/api/webhooks/464094552983339008/9-T1nITmPjrZJks5Ac35vKLspPaGiBmLaUVgFMfz4zyWhqEsd-9IMPG42T6gNI87F9ky',
        {
          content: `${this.state.name} (${this.state.email}) sent: ${
            this.state.body
          }`,
        }
      )
      .then(
        res => {
          this.setState({
            loading: false,
            success: true,
          })
        },
        err => {
          this.setState({
            error: 'An error occurred. Please try again!',
            loading: false,
          })
        }
      )
  }
}

const ContactPageWithLastLocation = withLastLocation(ContactPage)

const ContactPageWithLayout = props => (
  <BaseLayout {...props}>
    <ContactPageWithLastLocation {...props} />
  </BaseLayout>
)

export default ContactPageWithLayout
