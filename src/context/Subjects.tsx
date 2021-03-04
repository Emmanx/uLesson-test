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

  return (
    <SubjectsContext.Provider value={{ data, isLoading, isError, error }}>
      {children}
    </SubjectsContext.Provider>
  );
};

export { SubjectsContext, SubjectsContextProvider };
