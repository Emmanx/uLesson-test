import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { ILesson } from '../../types';
import { truncate } from '../../utils';

interface ILessonProps {
  lesson: ILesson;
}

export const Lesson = ({ lesson }: ILessonProps): React.ReactElement => {
  return (
    <Box
      px="2.7rem"
      pb="1.5rem"
      w="19.6rem"
      h="21.4rem"
      mr="1rem"
      borderRadius="1.7rem"
      bg="#fff"
      textAlign="center"
    >
      <Image
        w="10rem"
        mx="auto"
        mt="1rem"
        alt="chapter image"
        src={lesson.icon}
      />
      <Text mt="3rem" fontWeight="700" fontSize="1.9rem">
        {truncate(lesson.name, 10)}
      </Text>
      <Box mt="1.2rem" w="100%" borderRadius="1rem" h="5px">
        <Box w="50%" h="100%" bg="#68BC98" />
      </Box>
    </Box>
  );
};
