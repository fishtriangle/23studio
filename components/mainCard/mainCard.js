import {Card} from "react-bootstrap";
import Link from "next/link";
import React from "react";

export default function MainCard({id, title, year, typeStr, imgPath}) {
  // console.log(id, title, year, typeStr, imgPath)
  const typeArray = typeStr.split(' ')

  return (
    <Card className={'main-card'}>
      <Card.Header className={'bg-white border-0 px-0'}>
        {
          typeArray.map((type, index) => (
            <a href={'/'} key={index}>
              <span className={'main-card_header-icon'}>
                {type}
              </span>
            </a>
          ))
        }


        {/*<a href={'/'}>*/}
        {/*  <span className={'main-card_header-icon'}>*/}
        {/*    sensor*/}
        {/*  </span>*/}
        {/*</a>*/}
        {/*<a href={'/'}>*/}
        {/*  <span className={'main-card_header-icon'}>*/}
        {/*    3D*/}
        {/*  </span>*/}
        {/*</a>*/}
        {/*<a href={'/'}>*/}
        {/*  <span className={'main-card_header-icon'}>*/}
        {/*    unity*/}
        {/*  </span>*/}
        {/*</a>*/}
      </Card.Header>
      <Card.Img variant="top" src={imgPath} />
      <Card.Body className={'px-0'}>
        <Card.Title className={'fw-bold'}>{title}</Card.Title>
        <Card.Text className={'small text-muted'}>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <Link href={`/${id}`}>
        <a>
          <span className={'main-card_btn'}>
            Подробнее...
          </span>
        </a>
      </Link>
    </Card>
  )
}