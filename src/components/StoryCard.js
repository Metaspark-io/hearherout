import React from "react"

import {FaShareAlt, FaRegClock} from "react-icons/fa"

import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

export const StoryCard = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <Col xs="10" md="4" xl="3">
      <Card className="mb-4">
        <Card.Img variant="top" src="http://placehold.jp/24/D25C28/fff/150x100.png" />
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center text-muted">
            <Card.Subtitle>Jane Doe</Card.Subtitle>
            <div className="d-none d-lg-inline-flex">
              {storytime}
            </div>
          </div>
          <Card.Title className="mb-2">Short story title</Card.Title>
          <div className="d-inline-flex d-lg-none">
            {storytime}
          </div>
          <Card.Text className="mt-1">
            Story description/flavor text: One to Two lines of text to entice users to click play
          </Card.Text>
        </Card.Body>
        <Card.Body className="d-flex pt-0 justify-content-between align-items-center">
          <Button variant="outline-secondary" size="sm">Play Story</Button>
          <Button variant="link"><FaShareAlt/></Button>
        </Card.Body>
      </Card>
    </Col>
  )
}

const storytime = (
  <React.Fragment>
    <FaRegClock className="mr-1 text-muted"/>
    <small className="text-muted">10:04</small>
  </React.Fragment>
)
