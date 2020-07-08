import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <Link to="https://www.google.com/" target="_blank">Twitter</Link>
        </Layout>
    )
}

export { ContactPage as default }