import React from 'react';
import About from '../components/About';
import Header from '../components/Header';
import Layout from '../components/Layout';

function HomePage() {
  return (
    <Layout>
      <Header />
      <About />
    </Layout>
  );
}

export default HomePage;
