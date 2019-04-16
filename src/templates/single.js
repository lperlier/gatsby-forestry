import React from 'react'
// eslint-disable-next-line
import { graphql } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'
import { PageContent } from 'components/page/PageContent'
import { YSWYWContent } from 'components/page/YSWYWContent'

export default class SinglePost extends React.Component {
  render() {
    
    const post = this.props.data.markdownRemark

    return (
      <>
      
      <main className="Single">
        <PageHeader>
          <h1>{post.frontmatter.title}</h1>
          {post.frontmatter.date && (
            <time>{post.frontmatter.date}</time>
          )}
        </PageHeader>
        <PageContent >
          <YSWYWContent html={post.html}/>
        </PageContent>
        
      </main>
        
      </>
    )
  }
}

export const pageQuery = graphql`
  query SinglePageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
