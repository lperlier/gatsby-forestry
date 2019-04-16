import React from 'react'
// eslint-disable-next-line
import { graphql } from 'gatsby'

import { PageHeader } from 'components/page/PageHeader'
import { PageContent } from 'components/page/PageContent'

export default class SingleProject extends React.Component {
  render() {
    
    const post = this.props.data.markdownRemark

    return (
      <>
      
        <article class="Projet">
          <PageHeader>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.description}</p>
          </PageHeader>
          <PageContent >
            {post.frontmatter.gallery.map((image, index) => (
              <img
                key={index}
                alt=''
                srcSet={image.childImageSharp.fluid.srcSet}
              />
            ))}
          </PageContent>
        </article>
      
      </>
    )
  }
}

export const pageQuery = graphql`
  query SingleProjetBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        gallery {
          childImageSharp {
            fluid(maxWidth: 800) {
              srcSet
            }
          }
        }
      }
    }
  }
`