import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import layoutStyles from "./layout.module.css"

const NavLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}  className={layoutStyles.navLink}>{props.children}</Link>
    </li>
)


export default function Layout({children}){
    const data = useStaticQuery(
        graphql`
        query {
            allKontentItemHeading {
              edges {
                node {
                  id
                  elements {
                    subtitle {
                      name
                      value
                    }
                    title {
                      name
                      value
                    }
                  }
                }
              }
            }
          }
        `
    )

    let TitleData = data.allKontentItemHeading.edges[0].node.elements;

    return (
        <div className={layoutStyles.layout}>
            <header>
                <Link to='/'>
                    <div className={layoutStyles.siteTitle}>
                        <h1>{TitleData.title.value}</h1>
                        <h2>{TitleData.subtitle.value}</h2>
                    </div>
                </Link>
                <ul style={{listStyle: `none`, float: `right`}}>
                    <NavLink to='/about'>About</NavLink>
                </ul>
            </header>
            {children}
        </div>
    )
}