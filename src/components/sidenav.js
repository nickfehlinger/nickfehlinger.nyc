import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import sidenavStyles from "./sidenav.module.css"

const NavLink = props => (
    <li className={sidenavStyles.navItem}>
        <Link to={props.to} className={sidenavStyles.navLink}>{props.children}</Link>
    </li>
)

export default function SideNav(){
    let data = useStaticQuery(
        graphql`
        {
            allKontentItemPage {
              edges {
                node {
                  id
                  fields {
                    slug
                  }
                  elements {
                    page_name {
                      value
                    }
                  }
                }
              }
            }
          }
          
        `
    )
    let navValues = data.allKontentItemPage.edges

    return (
        <ul className={sidenavStyles.navList}>
            {navValues.map((navLink) => {
                let link = `/${navLink.node.fields.slug}`,
                    value = navLink.node.elements.page_name.value;

                return <NavLink to={link}>{value}</NavLink>
            })}
        </ul>
    )

}