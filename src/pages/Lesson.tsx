import { Button, Container, Flex, Image, Text } from '@chakra-ui/react';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { IChapter, ILesson } from '../types';

import whiteCircle from '../assets/patterns/white-circle-lg.svg';
import pattern from '../assets/patterns/button.svg';
import backArrow from '../assets/icons/arrow.svg';

import { SubjectsContext } from '../context';
import { CONTAINER_MAX_WIDTH } from '../constants/layout';
import { Player } from '../components/lesson';

export const Lesson = (): React.ReactElement => {
  const { subjectId, chapterId, lessonId } = useParams<any>();
  const [lesson, setLesson] = useState<ILesson | null>();
  const [chapter, setChapter] = useState<IChapter | null>();
  const { data } = useContext(SubjectsContext);

  useEffect(() => {
    const subject = data?.subjects.find(
      (subjectData) => subjectData.id === Number(subjectId)
    );

    const foundChapter = subject?.chapters.find(
      (ch) => ch.id === Number(chapterId)
    );

    const item = foundChapter?.lessons.find((ls) => ls.id === Number(lessonId));

    setChapter(foundChapter);
    setLesson(item);
  }, [data, subjectId, chapterId, lessonId]);

  if (!lesson) {
    return <Text mt="12.8rem">No Video</Text>;
  }

  return (
    <Container maxW={CONTAINER_MAX_WIDTH}>
      <Image src={whiteCircle} pos="fixed" top="0" right="0" />
      <Link to={`/subject/${subjectId}/chapters`}>
        <Image
          pos="relative"
          top={{ base: '0', lg: '6rem' }}
          left={{ base: '0', lg: '-10rem' }}
          src={backArrow}
        />
      </Link>
      <Player url={lesson.media_url} poster={lesson.icon} />
      <Flex
        mb="5rem"
        w="100%"
        textAlign="center"
        direction="column"
        justify="center"
      >
        <Text mt="2rem" fontSize="2.4rem" color="#313848">
          {lesson.name}
        </Text>
        <Text mt="1rem" fontSize="1.8rem" opacity=".5" color="#313848">
          {chapter?.name}
        </Text>
        <Button
          mx="auto"
          mt="2rem"
          w="36rem"
          h="6rem"
          borderRadius="8px"
          bg={`url(${pattern})`}
          fontSize="1.8rem"
          textTransform="uppercase"
          color="#fff"
          _hover={{
            background: `url(${pattern})`,
            opacity: '.8',
          }}
          _active={{
            background: `url(${pattern})`,
            opacity: '.8',
          }}
        >
          Next
        </Button>
      </Flex>
    </Container>
  );
};
