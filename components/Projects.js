import React from 'react';
import Card from './Card';

import styles from './Projects.module.css';

function Projects({ children }) {
  return (
    <div className={styles.Projects}>
      <div className={styles.top}>
        <h2>Projects</h2>
      </div>
      <div className={styles.bottom}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
