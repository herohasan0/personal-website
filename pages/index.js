import { getTable } from '@lib/airtable';

import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';

function HomePage(data) {
  return (
    <>
      <About />
      <Projects Projects={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getTable('tasks');

  return {
    props: {
      data,
    },
    revalidate: 600,
  };
}

export default HomePage;
