import {Col, Container, Row} from "react-bootstrap";
import Logo from "../logo/logo";

export default function Footer() {

  return (
    <Container className={'mt-5 flex-grow-0'}>
      <Row className={'me-4 justify-content-center align-items-center '}>
        <Col xs md={'1'}>
          <Logo />
        </Col>
        <Col xs md={'auto'}>
          <span className={'small'}>
            ИП Гусев А.Ю. ©<br />2022 г. Все права защищены.
          </span>
        </Col>
      </Row>
    </Container>
  )
}