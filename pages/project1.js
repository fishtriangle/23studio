import Link from "next/link";
import Header from "../components/header/header";
import React from "react";
import {Container} from "react-bootstrap";
import Head from "next/head";
import Layout from "../components/layout/layout";

export default function Project1(props) {
  return (
    <Layout>
      <Head>
        <title>Проект 1</title>
      </Head>
      <Header />
      <Container>
        <h1>Проект 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem id laboriosam laudantium magni maxime minima odio omnis possimus quam quia, sunt voluptatum. Alias dolores fugiat minima sint ullam vero?</p>
        <p><Link href={'/'}><a>Back</a></Link></p>
      </Container>
    </Layout>
  )
}