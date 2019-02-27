import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/Layout'

const index = ({ data }) => {
  return console.log(data) || (
    <Layout>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.allImageSharp.edges.map(({ node }) => <div><Image fixed={node.fixed} /></div>)}
      </div>
      <Link to="/">Back to home</Link>
    </Layout>
  )
}

export const query = graphql`
   {
    allImageSharp {
      edges {
        node {
          fixed {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  }
`

export default index