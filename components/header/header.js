import {Container, Row} from "react-bootstrap";
import Image from "next/image";
import Logo from "../logo/logo";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <Container className={"d-flex justify-content-lg-between py-2 border-bottom flex-column flex-lg-row mb-5 sticky-md-top bg-white flex-grow-0"}>
      <Logo />
      <div className={'d-flex align-items-center justify-content-center justify-content-lg-start'}>
        <Link href={'/#location'}>
          <a className={'fs-3 pt-1 fw-normal'}>
            как нас найти?
          </a>
        </Link>
      </div>
      <div className={'d-flex nowrap align-items-center justify-content-center justify-content-lg-start'}>
        <div>
          <p className={'mb-0 me-4 fs-3 pt-2 fw-bold'}>
            <a href={'/'}>
              +7 900 000 00 00
            </a>
          </p>
        </div>
        <div className={'d-flex flex-nowrap align-items-baseline ms-4'}>
          <p className={'mb-0 fs-3 fw-bold'}>
            <a href={'/'}>
              <svg className={'headerInstagram'} width={"30px"} height={"100%"} viewBox={"0 0 12.07 12.07"} version={"1.1"} xmlns={"http://www.w3.org/2000/svg"} xmlnsXlink={"http://www.w3.org/1999/xlink"} xmlSpace={"preserve"}>
                  <g id="Слой_2" data-name="Слой 2">
                    <g id="Слой_1-2" data-name="Слой 1">
                      <g id="logo">
                        <path id="logo-2" data-name="logo" className="cls-1"
                              d="M10.68,5.1H9.62a3.71,3.71,0,1,1-7.18,0H1.39v5.11a.46.46,0,0,0,.46.46h8.35a.46.46,0,0,0,.46-.46Zm0-3.25a.46.46,0,0,0-.46-.46H8.82a.46.46,0,0,0-.46.46V3.25a.46.46,0,0,0,.46.46h1.39a.46.46,0,0,0,.46-.46ZM6,3.71A2.32,2.32,0,1,0,8.35,6,2.32,2.32,0,0,0,6,3.71m4.64,8.35H1.39A1.39,1.39,0,0,1,0,10.67V1.39A1.39,1.39,0,0,1,1.39,0h9.28a1.39,1.39,0,0,1,1.39,1.39v9.28a1.39,1.39,0,0,1-1.39,1.39"/>
                      </g>
                    </g>
                  </g>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </Container>
  )
}