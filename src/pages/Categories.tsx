import { Category } from '@components/eCommerce';
import { Container, Row, Col } from 'react-bootstrap';

function Categories() {
  return (
    <Container>
      <Row>
        <Col xs={3} md={4} className="d-flex justify-content-center my-5">
          <Category />
        </Col>
        <Col xs={3} md={4} className="d-flex justify-content-center my-5">
          <Category />
        </Col>
        <Col xs={3} md={4} className="d-flex justify-content-center my-5">
          <Category />
        </Col>
        <Col xs={3} md={4} className="d-flex justify-content-center my-5">
          <Category />
        </Col>
        <Col xs={3} md={4} className="d-flex justify-content-center my-5">
          <Category />
        </Col>
      </Row>
    </Container>
  )
}

export default Categories