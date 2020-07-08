import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>Need a developer? <Link to="/contact"><p>Hire me!</p></Link></p>
        </Layout>
    )
}
export { AboutPage as default }