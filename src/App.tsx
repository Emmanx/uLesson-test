import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from './style/theme';
import { Chapters, Dashboard } from './pages';
import { SubjectsContextProvider } from './context';

export const App = (): React.ReactElement => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SubjectsContextProvider>
        <ChakraProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/subject/:id/chapters">
                <Chapters />
              </Route>
            </Switch>
          </Router>
        </ChakraProvider>
      </SubjectsContextProvider>
    </QueryClientProvider>
  );
};
