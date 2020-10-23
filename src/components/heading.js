import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import headingStyles from "./heading.module.css"

export default function Heading() {
    let data = useStaticQuery(
    graphql`
        {
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
        }
    `
    )
    let headingData = data.allKontentItemHeading.edges[0].node.elements;
    let toggleMenu = function(){
        let menu = document.getElementById("sideNav")
        menu.style.display = menu.style.display === "none" ? "block" : "none"
    }
    return(
        <div className={headingStyles.heading}>
            <Link to='/'>
                <h1>{headingData.title.value}</h1>
                <h2>{headingData.subtitle.value}</h2>
            </Link>
            <div className={headingStyles.hamburger} onClick={toggleMenu}>
                <svg viewBox="0 0 120 80" width="35" height="40">
                    <rect width="120" height="10"></rect>
                    <rect y="30" width="120" height="10"></rect>
                    <rect y="60" width="120" height="10"></rect>
                </svg>
            </div>
        </div>
    )
}
