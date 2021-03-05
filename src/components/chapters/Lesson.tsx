import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ILesson } from '../../types';
import { truncate } from '../../utils';

interface ILessonProps {
  lesson: ILesson;
}

export const Lesson = ({ lesson }: ILessonProps): React.ReactElement => {
  const history = useHistory();

  const handleClick = () => {
    history.push(
      `/subject/${lesson.subject_id}/chapter/${lesson.chapter_id}/lesson/${lesson.id}`
    );
  };

  return (
    <Flex
      flexDir="column"
      justify="space-between"
      px="2.7rem"
      pb="2rem"
      w="19.6rem"
      mr="1rem"
      borderRadius="1.7rem"
      bg="#fff"
      textAlign="center"
      pos="relative"
      cursor="pointer"
      onClick={handleClick}
    >
      <Image
        w="10rem"
        mx="auto"
        mt="1rem"
        alt="chapter image"
        src={lesson.icon}
      />
      <Box mt="3rem">
        <Text fontWeight="700" fontSize="1.9rem">
          {truncate(lesson.name, 10)}
        </Text>
        <Box mt="1.2rem" w="100%" borderRadius="1rem" h="5px">
          <Box w="50%" h="100%" bg="#68BC98" />
        </Box>
      </Box>
    </Flex>
  );
};
