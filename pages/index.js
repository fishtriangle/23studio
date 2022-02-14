import React from "react"
import Link from 'next/link'
import Header from "../components/header/header";
import {Col, Container, Row} from "react-bootstrap";
import Head from "next/head";
import MainCard from "../components/mainCard/mainCard";
import styles from "./index.module.scss";

const Index = () => {

  return (
    <>
      <Head>
        <title>23 studio</title>
      </Head>
      <Header />
      <Container as={'main'}>
        <Row xs={1} md={2} lg={3} xl={4} className={styles.cardLayout}>
          {Array.from({length: 9}).map((_, idx) => (
            <Col key={idx}>
              <MainCard />
            </Col>
          ))}
        </Row>


        {/*<div className={styles.cardLayout + ' d-flex flex-wrap flex-row align-items-center justify-content-center justify-content-md-start'}>*/}

        {/*  <MainCard />*/}
        {/*  <MainCard />*/}
        {/*  <MainCard />*/}
        {/*  <MainCard />*/}
        {/*  <MainCard />*/}
        {/*  <MainCard />*/}
        {/*</div>*/}


          <Link href={'/project1'}>
            <a>To project 1</a>
          </Link>


      </Container>
    </>
  )
}

export default Index