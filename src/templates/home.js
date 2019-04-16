import React from 'react'
// eslint-disable-next-line
import { graphql } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'

export default class Homepage extends React.Component {
  render() {
    
    const post = this.props.data.markdownRemark

    return (
      <>
    
        <main className="HomePage">
          <PageHeader>
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.subtitle}</h2>
          </PageHeader>
        </main>
        
      </>
    )
  }
}

export const pageQuery = graphql`
  query HomePageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        template
        subtitle
      }
    }
  }
`
