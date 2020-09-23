import { graphql } from "gatsby"
import React from "react"
import Container from "../components/container"
import Layout from "../components/layout"



export default function Home({data}) {
  let pageData = data.allKontentItemPage.edges[0].node.elements;
  return <Layout>
            <Container pageName={pageData.page_name.value} pageDescription={pageData.page_description.value}></Container>
         </Layout>
}

export const query = graphql`
{
  allKontentItemPage(filter: {system: {codename: {eq: "home_page"}}}) {
    edges {
      node {
        id
        elements {
          page_name {
            name
            value
          }
          page_description {
            name
            value
          }
        }
      }
    }
  }
}
`