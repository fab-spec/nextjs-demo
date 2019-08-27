import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>NextJS & FAB demo</title>
    </Head>

    <Nav />

    <div className='hero'>
      <img src={require('../assets/fab-logo-square.png')} alt=""/>
      <h1 className='title'>Next.js running in a FAB!</h1>
      <p className='description'>
        This page is statically rendered.
      </p>


      <div className='row'>
        <Link href='/dynamic'>
          <a className='card'>
            <h3>Dynamic page</h3>
            <p>Dropping <code>getInitialProps</code> onto a page will make it dynamic.</p>
          </a>
        </Link>
        <Link href="/background/[size]" as="/background/300">
          <a className='card'>
            <h3>With arguments</h3>
            <p>By using a filename like <code>bill/[size].js</code> we can create a dynamic Bill Murray wallpaper</p>
          </a>
        </Link>
        <Link href="/background/[size]" as="/background/400">
          <a className='card'>
            <h3>Bigger Bill Murray</h3>
            <p>Same as the previous link, but the images are bigger!</p>
          </a>
        </Link>
      </div>
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
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
