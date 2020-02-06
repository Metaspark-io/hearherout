import React from "react"
import {Link} from "gatsby"
import { Row, Col, Container, Button } from "react-bootstrap"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import {FaRegClock} from "react-icons/fa"

import Layout from "../components/layout"
import {StoryCard} from "../components/StoryCard"
import SEO from "../components/seo"

import Logo from '../images/hho-orange.png'

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "Home" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <section
      className="hero-section  py-5"
    >
      <Container className="h-100">
        <Row className="d-flex align-items-center h-100">
          <Col xs="12" sm="8" md="6">
            <img className="img-fluid hho-logo mb-4" src={Logo} alt="Hear Her Out: Share your story. Inspire the future"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            </p>
            <Button variant="primary" className="mr-2">Share your story</Button>
            <Button variant="secondary">Listen to stories</Button>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="py-5" style={{overflowX: 'hidden'}}>
      <Container>
        <Row>
          <Col xs="12">
            <h2 className="text-center">Lorem Ipsum</h2>
            <Row className="force-h-scroll">
              <StoryCard/>
              <StoryCard/>
              <StoryCard/>
              <StoryCard/>
              <StoryCard/>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="py-5 bg-light">
      <Container>
        <Row>
          <Col xs="12" className="d-flex d-lg-none">
            <h2 className="text-center w-100">{mapTitle}</h2>
          </Col>
          <Col xs="12" lg="8">
            <img className="mx-auto d-block img-fluid py-3 py-lg-0" src="http://placehold.jp/24/4e4d49/c8dfd1/800x500.png"/>
          </Col>
          <Col xs="12" lg="4" className="text-center text-lg-left text-center d-lg-flex flex-column justify-content-center align-items-center">
            <h2 className="d-none d-lg-flex">{mapTitle}</h2>
            <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in</p>
            <Link to="/bus-tour"><Button variant="secondary">Tour Dates & Events</Button></Link>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="py-5">
      <Container>
        <Row className="flex-column align-items-center mb-5">
          <Col xs="12" md="8" lg="6">
            <h2 className="text-center">Share your Story</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </Col>
          <Col xs="12" md="10">
            <Card bg="light">
              <Card.Body>
                <ol className="mb-0">
                  <li>Ignota menandri vituperata eos te, impetus temporibus quo no. Consul doctus eloquentiam sea te, eam melius invenire an.</li>
                  <li>Accumsan comprehensam vis ut. Ei his eius dolorem atomorum, tritani inermis definiebas duo in!</li>
                  <li>Simul ubique ad has, graeco mnesarchum ut his.</li>
                </ol>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="7" lg="8" className="mb-4">
            <Form>
              <Row className="mb-4">
                <Col xs="12">
                  <h3>Your Story {requiredTag}</h3>
                </Col>
                <Col>
                  <Button variant="outline-primary" block>Record your story</Button>
                </Col>
                <Col>
                  <Button variant="outline-primary" block>Upload from device</Button>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xs="12">
                  <h3>Story Details</h3>
                </Col>
                <Col>
                  <Row className="mb-2">
                    <Col>
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" placeholder="Title" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label>Image</Form.Label>
                      <Form.Control type="file"/>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" placeholder="1 or 2 sentences describing your story" />
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <h3>Your Info</h3>
                </Col>
                <Col xs="12">
                  <Row>
                    <Col>
                      <Form.Label>First/Given Name {requiredTag}</Form.Label>
                      <Form.Control type="text" placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Label>Last/Family Name {requiredTag}</Form.Label>
                      <Form.Control type="text" placeholder="Last name" />
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" className="mt-3">
                  <Row>
                    <Col>
                      <Form.Label>Email Address {requiredTag}</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Col>
                    <Col>
                      <Form.Label>Location {requiredTag}</Form.Label>
                      <Form.Control type="text" pattern="[0-9]*" placeholder="ZIP code"/>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col xs="12" md="5" lg="4" className="mb-4">
            <Card bg="light">
              <Card.Header>Live Preview</Card.Header>
              <Card.Body>
                {previewCard}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr/>
        <Row className="flex-column align-items-center">
          <Col xs="12" md="8" lg="6">
            <Form>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I consent for my story to be shared" />
                <Form.Check type="checkbox" label="Sign up for the latest REI news, events, and offers" />
              </Form.Group>
              <Button as="submit" variant="primary" block>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-3">
          <Col xs="12">
            <h2 className="text-center w-100">This project made possible with support from our partners</h2>
          </Col>
        </Row>
        <Row className="justify-content-around">
          {[...Array(5)].map((e, i) => (
            <Col xs="6" md="4" className="d-flex justify-content-center mb-4">
              <img className="img-fluid" src="http://placehold.jp/24/4e4d49/fff/200x200.png"/>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  </Layout>
)

export default IndexPage

const mapTitle = "Map lorem ipsum reprehenderit in voluptate"

const requiredTag = (
  <abbr
    title="required"
    aria-label="required"
    style={{
      color: 'red',
      textDecoration: 'none'
    }}
  >
    *
  </abbr>
)

const previewstorytime = (
  <React.Fragment>
    <FaRegClock className="mr-1 text-muted"/>
    <small className="text-muted">XX:XX</small>
  </React.Fragment>
)

const previewCard = (
  <Card>
    <Card.Img variant="top" src="http://placehold.jp/24/4e4d49/c8dfd1/150x100.png" />
    <Card.Body>
      <div className="d-flex justify-content-between align-items-center text-muted">
        <Card.Subtitle>Your Name Here</Card.Subtitle>
        <div className="d-none d-lg-inline-flex">
          {previewstorytime}
        </div>
      </div>
      <Card.Title className="mb-2">Short story title</Card.Title>
      <div className="d-inline-flex d-lg-none">
        {previewstorytime}
      </div>
      <Card.Text className="mt-1">
        Story description/flavor text: One to Two lines of text to entice users to click play
      </Card.Text>
    </Card.Body>
    <Card.Body className="d-flex pt-0 justify-content-between align-items-center">
      <Button variant="outline-secondary" disabled size="sm">Play Story</Button>
    </Card.Body>
  </Card>
)
