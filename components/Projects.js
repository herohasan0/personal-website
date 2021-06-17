import React from 'react';
import Card from './Card';
import Layout from './Layout';

import { Box, Flex } from '@chakra-ui/react';

function Projects({ Projects }) {
  let allProjects = Projects.data;

  return (
    <Box mt="170px">
      <Layout wrap="wrap">
        <Box fontSize="24px">
          <h2>Projects</h2>
        </Box>
        <Flex flexWrap="wrap" justifyContent="space-between" mt="50px">
          {allProjects.map((item) => (
            <Card
              Title={item.Title}
              Description={item.Description}
              Tags={item.Tags}
              Img={item.Img ? item.Img[0].url : ''}
            />
          ))}
        </Flex>
      </Layout>
    </Box>
  );
}

export default Projects;
