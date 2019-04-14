import React from 'react'
import Helmet from 'react-helmet'
// eslint-disable-next-line
import {Link, graphql } from 'gatsby'

import Layout from '../components/layout'

class SingleProject extends React.Component {
  render() {
    
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = post.excerpt

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttribute={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        {console.log(post.frontmatter.gallery)}
        {post.frontmatter.gallery.map((image, index) => (
          <img
            key={index}
            alt=''
            srcSet={image.childImageSharp.fluid.srcSet}
          />
        ))}
      </Layout>
    )
  }
}

export default SingleProject

export const pageQuery = graphql`
  query SinglePostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
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