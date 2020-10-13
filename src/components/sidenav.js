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
            allKontentItemPage(sort: {order: ASC, fields: elements___nav_order___value}) {
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
    const module = typeof window !== `undefined` ? require("module") : null
    
    let navValues = data.allKontentItemPage.edges

    let sideNavDisplay = window.innerWidth > 480 ? "block" : "none"

    window.addEventListener('resize', function(){
      sideNavDisplay = window.innerWidth > 480 ? "block" : "none";
      document.getElementById("sideNav").style.display = `${sideNavDisplay}`;
    })
    return (
      <ul className={sidenavStyles.navList} id="sideNav" style={{display: `${sideNavDisplay}`}}>
            {navValues.map((navLink) => {
              let link = `/${navLink.node.fields.slug}`,
              value = navLink.node.elements.page_name.value;
              
              return <NavLink to={link}>{value}</NavLink>
            })}
            <NavLink to="/contact">Contact</NavLink>
        </ul>
    )

}