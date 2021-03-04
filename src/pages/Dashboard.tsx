import { Box, Container, Heading, Image } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Section, SubjectGrid } from '../components/dashboard';
import { CONTAINER_MAX_WIDTH } from '../constants/layout';
import { SubjectsContext } from '../context';

import hand from '../assets/patterns/hand.svg';
import whiteCircle from '../assets/patterns/white-circle.svg';

export const Dashboard = (): React.ReactElement => {
  const { data } = useContext(SubjectsContext);

  return (
    <Box w="100%" mt="12.8rem" mb="5.3rem" overflowX="hidden">
      <Image alt="hand" src={hand} pos="fixed" top="0" left="0" zIndex="1" />
      <Container maxW={CONTAINER_MAX_WIDTH} pos="relative" zIndex="3">
        <Heading
          as="h1"
          fontWeight="normal"
          fontSize={{ base: '4rem', md: '4.8rem' }}
          fontFamily="'Itim', cursive"
        >
          Hello Hassan,
        </Heading>
        <SubjectGrid subjects={data?.subjects} />
        <Section />
      </Container>
      <Image
        alt="hand"
        src={whiteCircle}
        pos="fixed"
        bottom="0"
        right="0"
        zIndex="1"
      />
    </Box>
  );
};
