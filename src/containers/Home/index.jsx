import React, { Suspense, lazy } from 'react';
import './index.scss'
import Hero from './../../components/Hero/index';
import Navbar from './../../components/Navbar/index';


const IconsSection = lazy(() => import('./../../components/IconsSection/'))
const About = lazy(() => import('./../../components/About/'))
const Trending = lazy(() => import('./../../components/Trending/'))
const Footer = lazy(() => import('./../../components/Footer/'))

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div />}>
        <IconsSection />
      </Suspense>

      <Suspense fallback={<div />}>
        <About />
      </Suspense>

      <Suspense fallback={<div />}>
        <Trending />
      </Suspense>

      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>

    </>

  )
}

export default Home
