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
    return(
        <div className={headingStyles.heading}>
            <Link to='/'>
                <h1>{headingData.title.value}</h1>
                <h2>{headingData.subtitle.value}</h2>
            </Link>
        </div>
    )
}
