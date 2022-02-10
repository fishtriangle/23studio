import Link from "next/link";
import Header from "../components/header/header";
import React from "react";
import {Container} from "react-bootstrap";

export default function Project1() {
  return (
    <>
      <Header />
      <Container>
        <h1>Проект 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorem id laboriosam laudantium magni maxime minima odio omnis possimus quam quia, sunt voluptatum. Alias dolores fugiat minima sint ullam vero?</p>
        <p><Link href={'/'}><a>Back</a></Link></p>
      </Container>
    </>
  )
}