import * as React from 'react'
import { graphql } from 'gatsby'
import { css } from 'emotion'
import tw from 'tailwind.macro'

export default ({ data }) => {
  const title = data.contentfulEntry.title
  const __html = data.contentfulEntry.content.childMarkdownRemark.html

  return (
    <div className={css(tw`p-8 text-red`)}>
      { title }
      <div dangerouslySetInnerHTML={{ __html }} />
    </div>
  )
}


export const query = graphql`
  query($slug: String!) {
    contentfulEntry(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
