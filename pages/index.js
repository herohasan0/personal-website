import React from 'react';
import About from '../components/About';
import Connect from '../components/Connect';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import Social from '../components/Social';

function HomePage() {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
      <Connect />
      <Social />
    </Layout>
  );
}

export default HomePage;
