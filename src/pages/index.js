import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>My name is Julian, I'm a software engineer at Amazon.</p>
    <p>
      I'm doing a lot of React work there, so it'd be a lot of fun to use React
      to build something new.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
