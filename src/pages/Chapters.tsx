import { Box, Container, Heading, HStack, Image } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { CONTAINER_MAX_WIDTH } from '../constants/layout';

import arrow from '../assets/icons/arrow.svg';
import { SubjectsContext } from '../context';
import { ISubject } from '../types';
import { ChapterSection } from '../components/chapters';

export const Chapters = (): React.ReactElement => {
  const history = useHistory();
  const { id } = useParams();
  const [subject, setSubjects] = useState<ISubject | null>();
  const { data } = useContext(SubjectsContext);

  useEffect(() => {
    const item = data?.subjects.find(
      (subjectData) => subjectData.id === Number(id)
    );
    setSubjects(item);
  }, [data?.subjects, id]);

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Box w="100%" my="5.3rem">
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <HStack pos="relative" left="-11rem" spacing="3.8rem">
          <Image
            w="7.2rem"
            src={arrow}
            alt="arrow back"
            onClick={handleClick}
            cursor="pointer"
          />
          <Heading
            fontFamily="'Itim', cursive"
            fontSize="4.8rem"
            fontWeight="400"
          >
            {subject?.name}
          </Heading>
        </HStack>
        <Box>
          {subject?.chapters.map((ch) => (
            <ChapterSection key={ch.id} chapter={ch} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
