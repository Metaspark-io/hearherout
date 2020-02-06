import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout pageInfo={{ pageName: "About" }}>
    <SEO title="About Hear Her Out" />
    <header className="py-5 bg-primary text-white">
    <Container>
      <Row>
        <Col>
          <h1>About</h1>
        </Col>
      </Row>
    </Container>
    </header>
    <section className="py-5">
      <Container>
        <Row>
          <Col>
            <p>Lorem Ipsum Dolor Sit Amet Consectetur</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            <p>Donec elementum ligula eu sapien consequat eleifend</p>
            <Link to="/">Go back to the homepage</Link>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default About
