import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { VideoCard } from './VideoCard';

export const Section = (): React.ReactElement => {
  return (
    <Box w="100%" mt="5.6rem">
      <Flex w="100%" justify="space-between">
        <Heading
          as="h2"
          fontWeight="normal"
          fontSize="2.8rem"
          fontFamily="'Itim', cursive"
          mb="2.1rem"
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
        >
          See all
        </Button>
      </Flex>
      <Flex>
        <VideoCard color="#EA7052" />
      </Flex>
    </Box>
  );
};
