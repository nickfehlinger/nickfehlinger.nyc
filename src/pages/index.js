import React from "react"
import { graphql } from "gatsby"



export default function Home({ data }) {
  return <div>
           <h1>{data.allKontentItemHeading.edges[0].node.elements.title.value}</h1>
           <h2>{data.allKontentItemHeading.edges[0].node.elements.subtitle.value}</h2>
         </div>
}

export const query = graphql`
query MyQuery {
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