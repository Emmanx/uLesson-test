import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { SubjectCard } from './SubjectCard';

import { ISubjectsRes } from '../../types';

export const SubjectGrid = ({
  subjects,
}: {
  subjects: ISubjectsRes['subjects'];
}): React.ReactElement => {
  return (
    <Box mt="5.2rem">
      <Flex>
        {subjects.map((subject) => (
          <Box mr="1.338rem" key={subject.id}>
            <SubjectCard subject={subject} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
