import React from "react"
import Container from "../components/container"
import { graphql } from "gatsby"
import Layout from "../components/layout"



export default function About({data}) {
    let pageData = data.allKontentItemPage.edges[0].node.elements;
    return <Layout>
              <Container pageName={pageData.page_name.value} pageDescription={pageData.page_description.value}></Container>
           </Layout>
}

export const query = graphql`
    query ($slug: String!) {
        allKontentItemPage(filter: {fields: {slug: {eq: $slug}}}) {
        edges {
            node {
            fields {
                slug
            }
            elements {
                page_description {
                value
                }
                page_name {
                value
                }
            }
            }
        }
        }
    }
`