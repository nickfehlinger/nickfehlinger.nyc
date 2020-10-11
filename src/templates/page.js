import React from "react"
import Container from "../components/container"
import { graphql } from "gatsby"
import Layout from "../components/layout"



export default function About({data}) {
    let pageData = data.allKontentItemPage.edges[0].node.elements,
        hasheroImage = pageData.hero_image.value[0] ? true : false,
        hasdownloadable = pageData.downloadable__file.value[0] ? true : false,
        downloadable = hasdownloadable ? [pageData.downloadable__name.value, pageData.downloadable__file.value[0].url] : null,
        slug = data.allKontentItemPage.edges[0].node.fields.slug;
    return <Layout>
              <Container pageName={pageData.page_name.value} pageDescription={pageData.page_description.value} heroImage={hasheroImage ? pageData.hero_image.value[0].url : null} downloadable={hasdownloadable ? downloadable : null} slug={slug}></Container>
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
                hero_image {
                    value {
                        url
                    }
                }
                downloadable__file {
                    value {
                        url
                    }
                }
                downloadable__name {
                    value
                }
            }
            }
        }
        }
    }
`