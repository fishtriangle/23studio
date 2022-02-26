import Link from "next/link";
import Header from "../components/header/header";
import React from "react";
import {Container} from "react-bootstrap";
import Head from "next/head";
import Layout from "../components/layout/layout";
import Footer from "../components/footer/footer";

export default function Beringia_animation(props) {
  return (
    <Layout>
      <Head>
        <title>23 studio</title>
      </Head>
      <h1>Проект 1</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem id laboriosam laudantium magni maxime minima odio omnis possimus quam quia, sunt voluptatum. Alias dolores fugiat minima sint ullam vero?</p>
      <p><Link href={'/'}><a>Back</a></Link></p>
    </Layout>
  )
}
