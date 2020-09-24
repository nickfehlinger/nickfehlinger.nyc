const path = require(`path`)


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `kontent_item_page`) {
      createNodeField({
        node,
        name: `slug`,
        value: node.elements.page_name.value.toLowerCase().replace(/\s+/g, ''),
      })
    }
  }

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
    {
        allKontentItemPage {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `)
    console.log(result)
    result.data.allKontentItemPage.edges.forEach(({node}) => {
        console.log(node.fields.slug)
        createPage({
            path: node.fields.slug,
            component: path.resolve(`src/templates/page.js`),
            context: {
                slug: node.fields.slug
            }
        })
        console.log(createPage)
    });
}