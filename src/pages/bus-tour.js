import React from "react"
import { Container, Row, Col, Form, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import {EventCard} from "../components/EventCard"
import Layout from "../components/layout"
import SEO from "../components/seo"

const introContent = (
  <React.Fragment>
    <h1>Bus Tour and Events</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</p>
  </React.Fragment>
)

const BusTour = () => (
  <Layout pageInfo={{ pageName: "page-2" }}>
    <SEO title="Bus Tour dates and events" />
    <section className="py-5">
      <Container>
        <Row>
          <Col xs="12" md="3" lg="4">
            <header className="d-block d-md-none mb-3">
              {introContent}
            </header>
            <h2>Filters</h2>
            <Form>
              <Row className="mb-4">
                <Col>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select State</Form.Label>
                    <Form.Control as="select">
                      <option>California (10)</option>
                      <option>Colorado (5)</option>
                      <option>Florida (7)</option>
                      <option>Illinois (3)</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Text Search</Form.Label>
                    <Form.Control type="text" placeholder="Search"/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Event Type</Form.Label>
                    <Form.Check
                      type="checkbox"
                      label="Hear Her Out Bus Tour"
                      checked
                    />
                    <Form.Check
                      type="checkbox"
                      label="Community Events"
                      checked
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs="12" md="9" lg="8">
            <Row className="d-none d-md-flex">
              <Col md="8" lg="6">
                {introContent}
              </Col>
              <Col md="4" lg="6">
                <img className="mx-auto d-block img-fluid py-3 py-lg-0" src="http://placehold.jp/24/4e4d49/c8dfd1/800x500.png"/>
              </Col>
            </Row>
            <Row className="mt-5 mb-3">
              <Col className="d-flex justify-content-between align-items-baseline">
                <h4>53 Results</h4>
                <Form.Group className="d-flex align-items-baseline">
                  <Form.Label className="w-100 mb-0 ml-auto mr-2">Sort by</Form.Label>
                  <Form.Control as="select">
                    <option>Soonest First</option>
                    <option>Event Name Alphabetically</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              {[...Array(12)].map((e, i) => (
                <EventCard/>
              ))}
            </Row>
            <Row className="mt-4">
              <Col xs="12" className="d-flex justify-content-center">
                <ButtonToolbar aria-label="Toolbar with button groups">
                  <ButtonGroup aria-label="Previous result page">
                    <Button variant="outline-secondary" disabled><IoIosArrowBack/></Button>
                  </ButtonGroup>
                  <ButtonGroup className="mx-2" aria-label="Results page:">
                    <Button variant="secondary">1</Button>
                    <Button variant="outline-secondary">2</Button>
                    <Button variant="outline-secondary">3</Button>
                    <Button variant="outline-secondary">4</Button>
                  </ButtonGroup>
                  <ButtonGroup aria-label="Next result page">
                    <Button variant="outline-secondary"><IoIosArrowForward/></Button>
                  </ButtonGroup>
                </ButtonToolbar>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default BusTour
