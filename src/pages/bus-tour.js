import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BusTour = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="Bus Tour dates and events" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BusTour
