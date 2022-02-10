import React from "react"
import Link from 'next/link'
import Header from "../components/header/header";
import {Container} from "react-bootstrap";
import {Head} from "next/document";

const Index = () => {

  return (
    <>
      {/*<Head>*/}
      {/*  <title>23 studio</title>*/}
      {/*</Head>*/}
      <Header />
      <Container as={'main'}>
        <h1>Hello!</h1>
        <p>
          <Link href={'/project1'}>
            <a>To project 1</a>
          </Link>
        </p>
      </Container>
    </>
  )
}

export default Index