import React from "react"

import {FaShareAlt, FaRegClock, FaMapMarkerAlt} from "react-icons/fa"

import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const EventCard = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <Col xs="12" md="4" xl="3">
      <Card className="mb-4">
        <Card.Img variant="top" src="http://placehold.jp/24/D25C28/fff/150x100.png" />
        <Card.Body>
          <Card.Subtitle className="text-muted">Bus Tour</Card.Subtitle>
          <Card.Title>Event Name</Card.Title>
          {eventDetails}
          <Card.Text>
            Story description/flavor text: One to Two lines of text to entice users to check it out.
          </Card.Text>
        </Card.Body>
        <Card.Body className="d-flex pt-0 justify-content-between align-items-center">
          <Button variant="outline-secondary" size="sm">Add to Calendar</Button>
          <Button variant="link"><FaShareAlt/></Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

const eventDetails = (
  <div className="mt-1 mb-2">
    <div>
      <FaMapMarkerAlt className="mr-1 text-muted"/>
      <small className="text-muted">Los Angeles, CA</small>
    </div>
    <div>
      <FaRegClock className="mr-1 text-muted"/>
      <small className="text-muted">Mar 3, 2020 | 10:04am</small>
    </div>
  </div>
)
