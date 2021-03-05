import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { PlayIcon } from '../common';

type VideoCardProps = {
  color: string;
  title: string;
  subject: string;
  poster: string;
};

export const VideoCard = ({
  color,
  title,
  subject,
  poster,
}: VideoCardProps): React.ReactElement => {
  return (
    <Box
      w="calc(25% - 2rem)"
      minW="226px"
      mr={{ base: '0', sm: '2rem' }}
      mt="4rem"
      flexGrow={{ base: 1, sm: 0 }}
    >
      <Flex
        w="100%"
        h="15.8rem"
        borderRadius="18px"
        justify="center"
        align="center"
        bg={`linear-gradient(90deg, ${color} 50%, ${color} 100%)`}
        pos="relative"
      >
        <Image
          borderRadius="18px"
          pos="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          opacity=".8"
          alt="video poster"
          objectFit="cover"
          src={poster}
        />
        <PlayIcon color={color} />
      </Flex>
      <Text mt="1.5rem" color={color}>
        {subject}
      </Text>
      <Text
        maxWidth="95%"
        as="h4"
        fontWeight="bold"
        color="#313848"
        fontSize="2.2rem"
      >
        {title}
      </Text>
    </Box>
  );
};
