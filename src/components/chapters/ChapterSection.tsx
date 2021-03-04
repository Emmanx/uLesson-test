import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { IChapter } from '../../types';
import { Lesson } from './Lesson';

interface ChapterSectionProps {
  chapter: IChapter;
}

export const ChapterSection = ({
  chapter,
}: ChapterSectionProps): React.ReactElement => {
  return (
    <Box mt="4rem">
      <Heading fontFamily="'Itim', cursive" fontSize="3.3rem" fontWeight="400">
        {chapter.name}
      </Heading>
      <Flex mt="2rem">
        {chapter.lessons.map((lesson) => (
          <Lesson key={lesson.id} lesson={lesson} />
        ))}
      </Flex>
    </Box>
  );
};
