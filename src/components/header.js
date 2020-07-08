import React from 'react'
import { Link, graphql, gql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)


    return (
        <header className={headerStyles.header}>
            <h1>
            <Link className={headerStyles.title} to="/">
                {data.site.siteMetadata.title}
            </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
                    </li>
                    <li>
                    <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export { Header as default}