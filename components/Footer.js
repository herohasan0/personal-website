import React from 'react';

import Social from './Social';
import Connect from './Connect';

function Footer({ ...props }) {
  return (
    <footer id="contact">
      <Connect />
      <Social />
    </footer>
  );
}

export default Footer;
