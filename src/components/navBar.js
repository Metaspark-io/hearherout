import React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap"
import REI from "../images/REI-logo.svg"


const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <Navbar variant="dark" expand="lg" id="site-navbar" className="text-white" style={{background: '#000'}}>
        <Container>
          <Link to="/" className="link-no-style">
            <Navbar.Brand as="span">
              <img style={{width: 100, height: 63}} src={REI} alt="R.E.I. CO-OP"/>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" activeKey={pageInfo && pageInfo.pageName}>
              <Link to="/" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  About
                </Nav.Link>
              </Link>
              <Link to="/page-2" className="link-no-style">
                <Nav.Link as="span" eventKey="page-2">
                  Bus Tour
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default CustomNavbar
