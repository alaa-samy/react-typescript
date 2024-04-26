import { Product } from "@components/eCommerce"
import { Col, Container, Row } from "react-bootstrap"

function Products() {
  return (
    <Container>
    <Row>
      <Col xs={3} md={4} className="d-flex justify-content-center my-5">
        <Product />
      </Col>
      <Col xs={3} md={4} className="d-flex justify-content-center my-5">
        <Product />
      </Col>
      <Col xs={3} md={4} className="d-flex justify-content-center my-5">
        <Product />
      </Col>
      <Col xs={3} md={4} className="d-flex justify-content-center my-5">
        <Product />
      </Col>
      <Col xs={3} md={4} className="d-flex justify-content-center my-5">
        <Product />
      </Col>
    </Row>
  </Container>
  )
}

export default Products