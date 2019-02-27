import React from 'react'
import Image from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

export default ({ id }) => ( 
  <StaticQuery
    query={graphql`
      query ImageQuery {
        allImageSharp {
          edges {
            node {
              id
              fixed {
                ...GatsbyImageSharpFixed_tracedSVG
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allImageSharp.edges.filter(({ node }) => node.id === id)
      console.log(image)
      return <Image fixed={image[0].node.fixed} />}
    }
  />
)
