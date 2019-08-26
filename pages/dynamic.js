import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Dynamic = ({ rando }) => (
  <div>
    <Head>
      <title>NextJS & FAB demo</title>
    </Head>

    <Nav />

    <div className="hero">
      <img src={require('../assets/fab-logo-square.png')} alt="" />
      <h1 className="title">Next.js running in a FAB!</h1>
      <p className="description">
        This page was rendered on the server with a random number of {rando}
      </p>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .hero > img {
        display: block;
        margin: 0 auto;
        max-width: 260px;
        margin-top: 60px;
      }
      .title {
        margin: 0;
        width: 100%;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
)

Dynamic.getInitialProps = () => {
  return { rando: Math.random() }
}

export default Dynamic
