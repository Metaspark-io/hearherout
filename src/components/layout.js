import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { IoIosArrowBack } from "react-icons/io";

import Navbar from "./navBar"

import REI from "../images/REI-logo.svg"
import HHO from "../images/hho-white.png"

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
    <footer className="bg-dark py-5" style={{overflowX: 'hidden'}}>
      <Container className="px-0">
        <Row className="mb-4">
          <Col>
            <img className="img-fluid footer-logos mr-5" src={REI} />
            <img className="img-fluid footer-logos" src={HHO} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ol className="list-unstyled text-light mb-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About</Link></li>
              <li><Link to="/bus-tour">Bus Tour</Link></li>
            </ol>
          </Col>
        </Row>
        <hr className="mb-4 mt-0" style={{borderColor: "#505050"}}/>
        <Row className="justify-content-center mb-3">
          <Col xs="12" md="8" lg="6">
            <p className="text-left text-md-center">© 2020 Recreational Equipment, Inc. All rights reserved. REI, the REI Co-op logo, and the Hear Her Out logo are trademarks of Recreational Equipment, Inc.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="list-unstyled text-left text-md-center d-flex flex-column flex-md-row justify-content-around mb-0">
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">CA Transparency Act</a></li>
              <li><a href="/">REI Accessibility Statement</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  </React.Fragment>
)
export default Layout
