import React from "react"
import Link from 'next/link'
import Header from "../components/header/header";
import {Col, Container, Row} from "react-bootstrap";
import Head from "next/head";
import MainCard from "../components/mainCard/mainCard";
import styles from "./index.module.scss";
import Footer from "../components/footer/footer";
import Location from "../components/location/location";
import Layout, { siteTitle } from "../components/layout/layout";

const Index = () => {

  return (
    <Layout>
      <Head>
        <title>23 studio</title>
      </Head>
      <Row xs={1} md={2} lg={3} xl={4} className={styles.cardLayout}>
        {Array.from({length: 9}).map((_, idx) => (
          <Col key={idx}>
            <MainCard />
          </Col>
        ))}
      </Row>
      <hr />
      <Location />
      <hr />
    </Layout>
  )
}

export default Index