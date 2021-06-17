import React from 'react';

import {
  Box,
  Flex,
  Text,
  Image,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

function Card({ Title, Description, Tags, Img }) {
  return (
    <Box
      overflow="hidden"
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
      {/* <Box overflow="hidden" w="440px" h="230px"> */}
      <Box overflow="hidden" h="230px">
        <Image
          boxSize="100%"
          // boxSize="100px"
          objectFit="cover"
          alt={Title}
          src={
            Img
              ? Img
              : 'https://nicolesaidy.com/images/portfolio/booking-figma/figma-0.jpg'
          }
        />
      </Box>
      <Flex flexDirection="column" p="30px">
        <Flex>
          {Tags &&
            Tags.map((tag) => (
              <Box key={tag} mr="5px" fontSize="12px" color="#78818e">
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
          overflow="hidden"
          // w="380px"
          mt="7px"
        >
          <Link
            color={useColorModeValue('#27303b', 'white')}
            href={`https://${Title}`}
          >
            {Title}
          </Link>
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
