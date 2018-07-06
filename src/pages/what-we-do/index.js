import React from 'react'
import DefaultLayout from '../../layouts/Default'
import Jumbotron from '../../components/Jumbotron'
import Team from './Team'
import Process from './Process'
import PageHelmet from '../../components/PageHelmet'

const IndexPage = () => (
  <DefaultLayout>
    <PageHelmet title="What we do" description={"Learn about our process and technologies we use. Meet the team as well!"} />

    <Jumbotron
      title="What we do"
      description={`
        Lorem ipsum keme keme keme 48 years chipipay Gino krang-krang doonek na
        bakit kasi jutay cheapangga na ang borta shala ng neuro at ang juts at
        at bakit sa shogal pamin shonget ugmas 48 years ano pamin ng jutay
        krang-krang ng kasi matod at bakit dites quality control.
    `}
    />

    <Process />
    <Team />
  </DefaultLayout>
)

export default IndexPage
