const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const articleTemplate = path.resolve(`src/templates/article.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return graphql(`
    query loadPagesQuery ($limit: Int!) {
      allSwellProduct(limit: $limit) {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create article  pages.
    result.data.allSwellProduct.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `boutique/${node.slug}`,
        component: articleTemplate  ,
        context: { url: node.slug},
      })
    })
  })
}