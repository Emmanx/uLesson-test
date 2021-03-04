import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import styled from '@emotion/styled';
import { VideoCard } from './VideoCard';

import poster from '../../assets/images/video.png';
import poster2 from '../../assets/images/video2.png';
import poster3 from '../../assets/images/video3.png';
import poster4 from '../../assets/images/video4.png';

const videos = [
  {
    title: 'Understanding motion',
    color: '#EA7052',
    poster,
    subject: 'Mathematics',
  },
  {
    title: 'Light',
    color: '#7B7FDA',
    poster: poster2,
    subject: 'Physics',
  },
  {
    title: 'Polution of water',
    color: '#E48E45',
    poster: poster4,
    subject: 'Chemistry',
  },
  {
    title: 'Microorganism',
    color: '#4DA47E',
    poster: poster3,
    subject: 'Biology',
  },
];

const Videos = styled(Flex)`
  div:last-of-type {
    margin-right: 0;
  }
`;

export const Section = (): React.ReactElement => {
  return (
    <Box w="100%" mt="5.6rem">
      <Flex w="100%" justify="space-between" align="center">
        <Heading
          as="h2"
          fontWeight="normal"
          fontSize="2.8rem"
          fontFamily="'Itim', cursive"
        >
          Recently watched topics
        </Heading>
        <Button
          bg="#EA7052"
          color="#fff"
          fontSize="1.4rem"
          borderRadius="7px"
          w="9.8rem"
          h="3.315rem"
          textTransform="uppercase"
          display={{ base: 'none', sm: 'block' }}
          _hover={{
            background: '#EA7052',
            opacity: '0.8',
          }}
        >
          See all
        </Button>
      </Flex>
      <Videos wrap="wrap" justify="space-between">
        {videos.map((vid) => (
          <VideoCard key={vid.title} {...vid} />
        ))}
      </Videos>
      <Button
        bg="#EA7052"
        color="#fff"
        fontSize="1.4rem"
        borderRadius="7px"
        w="9.8rem"
        h="3.315rem"
        textTransform="uppercase"
        display={{ base: 'block', sm: 'none' }}
        mt="4rem"
        _hover={{
          background: '#EA7052',
          opacity: '0.8',
        }}
      >
        See all
      </Button>
    </Box>
  );
};
