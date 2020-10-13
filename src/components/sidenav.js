import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import sidenavStyles from "./sidenav.module.css"
import { window, document, exists } from 'browser-monads';

window.location.href;

let sideNavDisplay = window.innerWidth > 480 ? "none" : "block";

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
    
    let navValues = data.allKontentItemPage.edges


    console.log(window.innerWidth)
    console.log(sideNavDisplay)

    let setMenu = function(){
        console.log("this is happening")
        sideNavDisplay = window.innerWidth < 480 ? "none" : "block";
        document.getElementById("sideNav").style.display = `${sideNavDisplay}`;
    }
    window.addEventListener('load', setMenu())
    window.addEventListener('resize', setMenu())
    console.log(sideNavDisplay)
    return (
      <ul className={sidenavStyles.navList} id="sideNav">
        {console.log(sideNavDisplay)}
            {navValues.map((navLink) => {
              let link = `/${navLink.node.fields.slug}`,
              value = navLink.node.elements.page_name.value;
              
              return <NavLink to={link}>{value}</NavLink>
            })}
            <NavLink to="/contact">Contact</NavLink>
        </ul>
    )

}