import {Container, Row} from "react-bootstrap";
import Image from "next/image";


export default function Header() {
  return (
    <Container className={"d-flex justify-content-md-between py-2 border-bottom flex-column flex-lg-row mb-5"}>
      <div>
        <a href={'/'}>
          <Image
            src={'/img/headerLogo.jpg'}
            alt={'23 studio logo'}
            width={178}
            height={50}
          />
        </a>
      </div>

      <div className={'d-flex align-items-center'}>
        <a href={'/'} className={'fs-3 pt-1 fw-normal'}>
          как нас найти?
        </a>
      </div>
      <div className={'d-flex nowrap align-items-center'}>
        <div>
          <p className={'mb-0 me-4 fs-2 pt-2 fw-bold'}>
            <a href={'/'}>
              +7 900 000 00 00
            </a>
          </p>
        </div>
        <div className={'header-instagram d-flex flex-nowrap align-items-center ms-4 '}>
          <p className={'mb-0 fs-2 pt-2 fw-bold'}>
            <a href={'/'}>
              @23studio
            </a>
          </p>
        </div>
      </div>
    </Container>
  )
}