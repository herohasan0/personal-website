import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Projects from '../components/Projects';

function HomePage() {
  return (
    <Layout>
      <Header />
      <About />
      <Projects />
    </Layout>
  );
}

export default HomePage;
