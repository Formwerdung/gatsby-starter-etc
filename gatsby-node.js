const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const entryTemplate = path.resolve('./src/templates/entries.js')

    resolve(
      graphql(
        `
          {
            allContentfulEntry {
              edges {
                node {
                  title
                  slug
                }
              }       
            }     
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const entries = result.data.allContentfulEntry.edges
        entries.forEach(post => {
          createPage({
            path: `entries/${post.node.slug}`,
            component: entryTemplate,
            context: {
              slug: post.node.slug
            }
          })
        })
      })
    )
  })
}
