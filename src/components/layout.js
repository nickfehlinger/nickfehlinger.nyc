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
                  elements {
                    title {
                      value
                    }
                    subtitle {
                      value
                    }
                  }
                }
              }
            }
            allKontentItemPage {
                edges {
                    node {
                        elements {
                            page_name {
                                value
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
          }
        `
    )

    let TitleData = data.allKontentItemHeading.edges[0].node.elements,
        NavValues = data.allKontentItemPage.edges;

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
                    {NavValues.map((navLink) => {
                        let link = `/${navLink.node.fields.slug}`
                        return <NavLink to={link}>{navLink.node.elements.page_name.value}</NavLink>
                    }
                    )}
                </ul>
            </header>
            {children}
        </div>
    )
}