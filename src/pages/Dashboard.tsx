import { Box, Container, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Section, SubjectGrid } from '../components/dashboard';
import { CONTAINER_MAX_WIDTH } from '../constants/layout';
import { SubjectsContext } from '../context';

export const Dashboard = (): React.ReactElement => {
  const { data } = useContext(SubjectsContext);

  return (
    <Box w="100%" pt="5.3rem">
      <Container maxW={CONTAINER_MAX_WIDTH}>
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
    </Box>
  );
};
