import React from 'react';
import Card from './Card';

import styles from './Projects.module.css';

function Projects({ Projects }) {
  let allProjects = Projects.data;
  console.log('xxx', allProjects);
  return (
    <div className={styles.Projects}>
      <div className={styles.top}>
        <h2>Projects</h2>
      </div>
      <div className={styles.bottom}>
        {allProjects.map((item) => (
          <Card
            Title={item.Title}
            Description={item.Description}
            Tags={item.Tags}
            Img={item.Img ? item.Img[0].url : ''}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
