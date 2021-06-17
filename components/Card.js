import React from 'react';
import A from './Link';

import { Box, Flex, Text } from '@chakra-ui/react';

import styles from './Card.module.css';

function Card({ Title, Description, Tags, Img }) {
  return (
    <Box
      sx={{
        ':hover': {
          boxShadow: '0 8px 16px 0 rgba(0, 0, 0, 0.2)',
        },
      }}
      boxShadow="0 4px 8px 0 #0000001a"
      as="section"
      maxW="440px"
      mt="40px"
    >
      <Box w="440px" h="230px">
        <img
          className={styles.img}
          src={
            Img
              ? Img
              : 'https://nicolesaidy.com/images/portfolio/booking-figma/figma-0.jpg'
          }
        ></img>
      </Box>
      <Flex flexDirection="column" m="30px">
        <Flex>
          {Tags &&
            Tags.map((tag) => (
              <Box
                mr="5px"
                fontSize="12px"
                color="#78818e"
                className={styles.tags}
              >
                {tag}
              </Box>
            ))}
        </Flex>
        {/* <div className={styles.tags}>DESIGN SYSTEM</div> */}
        <Box
          fontSize="28px"
          lineHeight="39px"
          fontWeight="700"
          color="#27303b"
          w="380px"
          mt="7px"
          className={styles.title}
        >
          <A href={`https://${Title}`}>{Title}</A>
          {/* Booking.com: Design system Figma library */}
        </Box>
        <Text mt="16px" lineHeight="30px" fontSize="16px">
          {Description}
          {/* Created and maintaned the design system figma libraries, advocated for
          the design system, trained product teams */}
        </Text>
      </Flex>
    </Box>
  );
}

export default Card;
