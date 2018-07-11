/* @flow */
import React from 'react'
import styled from 'styled-components'
import Jumbotron from '../components/Jumbotron'
import Container from '../components/Container'
import BaseLayout from '../layouts/Base'
import Button from '../components/Button'
import Input from '../components/Input'
import InputError from '../components/InputError'
import Textarea from '../components/Textarea'
import FA from '../components/FA'
import vars from '../variables'
import PageHelmet from '../components/PageHelmet'
import { withLastLocation } from '../components/LastLocation'
import linkState from 'linkstate'
import axios from 'axios'
import Validator from 'validatorjs'

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

type Props = {
  history: {
    push: () => void,
    goBack: () => void
  },
  lastLocation: {}
}

type State = {
  email: string,
  subject: string,
  body: string,
  error: string,
  success: boolean,
  errors: {
    name?: string,
    email?: string,
    body?: string
  }
}

class ContactPage extends React.Component<void, Props, State> {
  state: State = {
    email: '',
    subject: '',
    body: '',
    error: '',
    loading: false,
    success: false,
    errors: {}
  }

  render() {
    return (
      <Container>
        <PageHelmet
          title="Contact Us"
          description={'Send business inquires or just drop by to say hi!'}
        />

        <ui.Wrapper>
          <ui.CloseButton>
            <Button
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
              alignment="center"
            />
          )}

          {!this.state.success && (
            <Jumbotron
              headline="Reach out"
              title="Let's create something together!"
            />
          )}
          {!this.state.success && this.state.error && <p>{this.state.error}</p>}
          {!this.state.success && (
            <form onSubmit={this.handleSubmit}>
              <ui.FormFields>
                <ui.FormFieldsInfo>
                  <ui.FormFieldsInfoSection>
                    <InputError errors={this.state.errors.name}>
                      <Input
                        placeholder="Your name"
                        onChange={linkState(this, 'name')}
                        value={this.state.name}
                      />
                    </InputError>
                  </ui.FormFieldsInfoSection>

                  <ui.FormFieldsInfoSection>
                    <InputError errors={this.state.errors.email}>
                      <Input
                        placeholder="Your email"
                        type="email"
                        onChange={linkState(this, 'email')}
                        value={this.state.email}
                      />
                    </InputError>
                  </ui.FormFieldsInfoSection>
                </ui.FormFieldsInfo>

                <InputError errors={this.state.errors.body}>
                  <Textarea
                    rows="8"
                    placeholder="Your message..."
                    onChange={linkState(this, 'body')}
                    value={this.state.body}
                  />
                </InputError>
              </ui.FormFields>

              <ui.FormAction>
                <Button
                  loading={this.state.loading}
                  spacious
                  size="large"
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

  format = () => {
    return {
      content: `${this.state.name} (${this.state.email}) sent: ${
        '```' + this.state.body + '```'
      }`,
    }
  }

  handleSubmit = evt => {
    evt.preventDefault()

    if (this.state.loading) {
      return
    }

    const v = new Validator(
      {
        name: this.state.name,
        email: this.state.email,
        body: this.state.body,
      },
      {
        name: 'required',
        email: 'email|required',
        body: 'required',
      }
    )

    if (v.fails()) {
      this.setState({
        errors: v.errors.all(),
        error: 'Please fill out the form properly.',
      })

      return
    }

    this.setState({
      loading: true,
    })

    axios
      .post(
        process.env.DISCORD_CONTACT_WEB_HOOK,
        this.format()
      )
      .then(
        res => {
          this.setState({
            loading: false,
            success: true,
          })
        },
        err => {
          console.log(process.env.DISCORD_CONTACT_WEB_HOOK)
          console.log(err)
          
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
