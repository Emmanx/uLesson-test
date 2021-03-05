import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import theme from './style/theme';
import { Chapters, Dashboard, Lesson } from './pages';
import { SubjectsContextProvider } from './context';
import { Header, PageReveal } from './components/layout';

export const App = (): React.ReactElement => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <SubjectsContextProvider>
        <ChakraProvider theme={theme}>
          <PageReveal />
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/subject/:id/chapters">
                <Chapters />
              </Route>
              <Route
                exact
                path="/subject/:subjectId/chapter/:chapterId/lesson/:lessonId"
              >
                <Lesson />
              </Route>
            </Switch>
          </Router>
        </ChakraProvider>
      </SubjectsContextProvider>
    </QueryClientProvider>
  );
};
