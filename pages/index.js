import React from "react"
import {Col, Row} from "react-bootstrap";
import Head from "next/head";
import MainCard from "../components/mainCard/mainCard";
import styles from "./index.module.scss";
import Location from "../components/location/location";
import Layout, { siteTitle } from "../components/layout/layout";
import { getProjectsData } from "../lib/projects";

export async function getStaticProps() {
  const allProjectsData = getProjectsData()
  // console.log(allProjectsData)

  return {
    props: {
      allProjectsData
    }
  }
}


const Index = ({ allProjectsData }) => {

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Row xs={1} md={2} lg={3} xl={4} className={styles.cardLayout}>
        {
          allProjectsData.map(({id, title, year, type, img_src}) => {
            // console.log(id, title, year, type, img_src)
            return (
              <Col key={id}>
                <MainCard id={id} title={title} year={year} typeStr={type} imgPath={img_src} />
              </Col>
            )
          })
        }

        {/*{Array.from({length: 9}).map((_, idx) => (*/}
        {/*  <Col key={idx}>*/}
        {/*    <MainCard />*/}
        {/*  </Col>*/}
        {/*))}*/}
      </Row>
      <hr />
      <Location />
      <hr />
    </Layout>
  )
}

export default Index