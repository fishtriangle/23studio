import {Container, Row} from "react-bootstrap";
import Image from "next/image";
import styles from './header.module.scss'
import Logo from "../logo/logo";

export default function Header() {
  return (
    <Container className={"d-flex justify-content-lg-between py-2 border-bottom flex-column flex-lg-row mb-5"}>
      <Logo />
      <div className={'d-flex align-items-center justify-content-center justify-content-lg-start'}>
        <a href={'/'} className={'fs-3 pt-1 fw-normal'}>
          как нас найти?
        </a>
      </div>
      <div className={'d-flex nowrap align-items-center justify-content-center justify-content-lg-start'}>
        <div>
          <p className={'mb-0 me-4 fs-3 pt-2 fw-bold'}>
            <a href={'/'}>
              +7 900 000 00 00
            </a>
          </p>
        </div>
        <div className={styles.headerInstagram + ' d-flex flex-nowrap align-items-baseline ms-4'}>
          <p className={'mb-0 fs-3 pt-2 fw-bold'}>
            <a href={'/'}>
              @23studio
            </a>
          </p>
        </div>
      </div>
    </Container>
  )
}