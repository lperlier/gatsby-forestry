import React from 'react'
// eslint-disable-next-line
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'
import { PageContent } from 'components/page/PageContent'
import { YSWYWContent } from 'components/page/YSWYWContent'

export default class ListTemplate extends React.Component {
  render() {
    
    const post = this.props.data.markdownRemark
    const childPosts = this.props.pageContext.children
    
    console.log(post.html);

    return (
      <>
      
        <main className="Archive">
          <PageHeader>
            <h1>{post.frontmatter.title}</h1>
            <YSWYWContent html={post.html}/>
          </PageHeader>
          <PageContent>
            {childPosts.map((child, index) => (
              <article key={index}>
                <Link to={child.node.fields.slug}>
                  <h3>{child.node.frontmatter.title}</h3>
                  <p>{child.node.excerpt}</p>
                </Link>
              </article>
            ))}
          </PageContent>
        </main>
        
      </>
    )
  }
}

export const pageQuery = graphql`
  query ListPageBySlug($slug: String!) {
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
