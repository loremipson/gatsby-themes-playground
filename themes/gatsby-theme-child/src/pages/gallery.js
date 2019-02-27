import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-theme-core/src/components/Image'

const gallery = () => {
  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <Image id="16e433f8-9641-5704-b0c5-cd369b9ea73c" />
        <Image id="8786cee2-b906-5d81-8760-d5499544762d" />
      </div>
      <Link to="/">Return to home</Link>
    </>
  )
}

export default gallery
