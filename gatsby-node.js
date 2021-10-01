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
        allDatoCmsBoutique(limit: $limit) {
        edges {
          node {
            url
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
    result.data.allDatoCmsBoutique.edges.forEach(({ node }) => {
      createPage({
        // Path for this page — required
        path: `/${node.url}`,
        component: articleTemplate  ,
        context: { url: node.url},
      })
    })
  })
}