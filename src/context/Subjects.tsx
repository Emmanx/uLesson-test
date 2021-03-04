import { Flex, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { fetchSubjects } from '../queries';
import { ISubjectsRes } from '../types';

interface ISubjectsContext {
  data: ISubjectsRes | undefined;
  isLoading: boolean;
  isError: boolean;
  error: unknown;
}

const SubjectsContext = React.createContext<ISubjectsContext>(
  {} as ISubjectsContext
);

const SubjectsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const { data, isLoading, isError, error } = useQuery(
    'subjects',
    fetchSubjects
  );

  if (isLoading) {
    return (
      <Flex justify="center" align="center" w="100%" h="100vh">
        <Spinner color="#EA7052" size="xl" />
      </Flex>
    );
  }

  if (!data) {
    return (
      <Flex justify="center" align="center" w="100%" h="100vh">
        <Text fontSize="3rem">No Data</Text>
      </Flex>
    );
  }

  return (
    <SubjectsContext.Provider value={{ data, isLoading, isError, error }}>
      {children}
    </SubjectsContext.Provider>
  );
};

export { SubjectsContext, SubjectsContextProvider };
