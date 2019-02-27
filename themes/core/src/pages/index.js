import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Hello from '../components/HelloWorld'
import Button from '../components/Button'

const index = () => {
  return (
    <Layout>
      <Hello />
      <p>This page is coming from core.</p>
      <Button>I am a button</Button>
      <Link to="/gallery">Go to Gallery</Link>
    </Layout>
  )
}

export default index
