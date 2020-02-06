import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { IoIosArrowBack } from "react-icons/io";

import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <React.Fragment>
    <section className="py-2" style={{background: '#2a2a2a'}}>
      <Container>
        <small><a className="text-light" href="https://rei.com"><IoIosArrowBack/> Forces of Nature: Putting Women front and center</a></small>
      </Container>
    </section>
    <Container fluid className="px-0 main">
      <Navbar pageInfo={pageInfo} />
      <main>{children}</main>
    </Container>
    <Container fluid className="px-0">
      <Row noGutters>
        <Col>
          <footer>
            <span>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </span>
          </footer>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)

export default Layout
