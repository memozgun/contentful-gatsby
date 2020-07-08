import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql, Link } from 'gatsby'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
        allContentfulBlogPost (
            sort: {
                fields:publishedDate,
                order:DESC
            }
        ){
            edges{
                node {
                    title
                    slug
                    publishedDate(formatString:"MMMM Do, YYYY")
                }
            }
        }
        }
    `)
    
    console.log(data.allContentfulBlogPost.edges)
    return (
        <Layout>
            <h1>Blog</h1>
            <h2>Posts will show up here.</h2>
            <ol className={blogStyles.posts}>
                {data.allContentfulBlogPost.edges.map(post => (
                    <li className={blogStyles.post}>
                        <Link to={`/blog/${post.node.slug}`}>
                        <h2>{post.node.title}</h2>
                        <p>{post.node.publishedDate}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}

export { BlogPage as default }