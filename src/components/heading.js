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
    // let toggleMenu = function(){
    //     let menu = document.getElementById("sideNav")
    //     console.log("this is happening")
    //     menu.style.display = menu.style.display === "none" ? "block" : "none"
    // }
    return(
        <div className={headingStyles.heading}>
            <Link to='/'>
                <h1>{headingData.title.value}</h1>
                <h2>{headingData.subtitle.value}</h2>
            </Link>
            <div className={headingStyles.hamburger} onClick={toggleMenu}>
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </div>
        </div>
    )
}
