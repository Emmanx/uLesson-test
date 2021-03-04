import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { SubjectCard } from './SubjectCard';

import { ISubjectsRes } from '../../types';

interface ISubjectGridProps {
  subjects: ISubjectsRes['subjects'] | undefined;
}

export const SubjectGrid = ({
  subjects,
}: ISubjectGridProps): React.ReactElement => {
  return (
    <Box mt="5.2rem">
      <Flex w="100%" wrap="wrap" justify={{ base: 'center', sm: 'flex-start' }}>
        {subjects?.map((subject) => (
          <Box
            w="19.1rem"
            mt="2rem"
            mr="1.3rem"
            flexGrow={{ base: 1, sm: 0 }}
            key={subject.id}
          >
            <SubjectCard subject={subject} />
          </Box>
        ))}
        <Box w="19.1rem" mt="2rem" mr="1.3rem" flexGrow={{ base: 1, sm: 0 }} />
      </Flex>
    </Box>
  );
};
