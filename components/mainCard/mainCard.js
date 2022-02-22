import {Card} from "react-bootstrap";

export default function MainCard() {
  return (
    <Card className={'main-card'}>
      <Card.Header className={'bg-white border-0 px-0'}>
        <a href={'/'}>
          <span className={'main-card_header-icon'}>
            sensor
          </span>
        </a>
        <a href={'/'}>
          <span className={'main-card_header-icon'}>
            3D
          </span>
        </a>
        <a href={'/'}>
          <span className={'main-card_header-icon'}>
            unity
          </span>
        </a>
      </Card.Header>
      <Card.Img variant="top" src="img/lunohod.png" />
      <Card.Body className={'px-0'}>
        <Card.Title className={'fw-bold'}>Интерактивная сенсорная панель "Луноход"</Card.Title>
        <Card.Text className={'small text-muted'}>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <a href={'/'}>
          <span className={'main-card_btn'}>
            Go somewhere
          </span>
      </a>
    </Card>
  )
}