import React from 'react';
import Card from './Card';
import Layout from './Layout';

import { Box, Flex, Heading } from '@chakra-ui/react';

function Projects({ Projects }) {
  let allProjects = Projects.data;

  return (
    <Box id="projects" mt="170px">
      <Layout wrap="wrap">
        <Box fontSize="24px">
          <Heading as="h2" fontSize="40px">
            Projects
          </Heading>
        </Box>
        <Flex flexWrap="wrap" justifyContent="space-between" mt="50px">
          {allProjects.map((item) => (
            <Card
              key={item.Id}
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
