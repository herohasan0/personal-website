import { getTable } from '@lib/airtable';

import React, { useEffect } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';

import ReactGA from 'react-ga';

function HomePage(data) {
  useEffect(() => {
    ReactGA.initialize('G-7HQXVKFZZF');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <About />
      <Projects Projects={data} />
    </>
  );
}

export async function getStaticProps() {
  const data = await getTable('tasks');

  // const posts = await data.json();

  // const cover = data.filter((o) => o.Category === 'Cover');
  // const general = data.filter((o) => o.Category === 'General');
  // const home = data.filter((o) => o.Category === 'Home');

  return {
    props: {
      data,
    },
    revalidate: 600,
  };
}

export default HomePage;
