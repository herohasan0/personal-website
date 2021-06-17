import React from 'react';

import Social from './Social';
import Connect from './Connect';

function Footer({ ...props }) {
  return (
    <div>
      <Connect />
      <Social />
    </div>
  );
}

export default Footer;
