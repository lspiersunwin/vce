/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

// Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getArticles {
      articles: allAirtable {
        nodes {
          data {
            slug
          }
        }
      }
    }
  `)

  console.log(JSON.stringify(result))

  result.data.articles.nodes.forEach(article => {
    createPage({
      path: `/article/${article.data.slug}`,
      component: path.resolve(`src/templates/article-template.js`),
      context: {
        slug: article.data.slug,
      },
    })
  })
}
