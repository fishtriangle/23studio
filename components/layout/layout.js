import Header from "../header/header";
import React from "react";
import Head from "next/head";
import Footer from "../footer/footer";
import {Container} from "react-bootstrap";

const title = 'Project 1'
export const siteTitle = '23 studio'

export default function Layout({ children, home }) {
  return (
    <div className={'min-vh-100 d-flex flex-column'}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/favicon/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="/img/favicon/site.webmanifest"
        />
        <meta
          name="description"
          content="23 Studio official website"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header />
      <Container as={'main'} className={'flex-grow-1'}>
        { children }
      </Container>
      <Footer />
    </div>
  )
}