import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import Head from '../components/head'
const IndexPage = () => {
  return (
    <Layout>
      <Head />
      <h1>Hello</h1>
      <h2>I am mert!</h2>
      <p>Need a developer? <Link to="/contact"><p>Hire me!</p></Link></p>
    </Layout>
  )
}

export { IndexPage as default }