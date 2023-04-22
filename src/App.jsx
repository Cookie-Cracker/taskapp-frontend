/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BaseTheme } from './theme/BaseTheme';

import Home from './pages/Home';
// import Signup from './pages/Auth/Signup';
// import Subpage from './pages/Projects/Subpage';
import Login from './app/features/auth/Login';
import Signup from './app/features/auth/Signup';
import RootLayout from './layouts/RootLayout';
import LabelsList from './app/features/labels/LabelsList';
import ProjectsList from './app/features/projects/ProjectsList';
import TasksByProject from './app/features/projects/TasksByProject';
import RequiredAuth from './app/features/auth/RequireAuth';
import PersistLogin from './app/features/auth/PersistLogin';
import Page404 from './pages/404';
import TodayTasks from './app/features/tasks/today/Today.Tasks';

const App = () => {
  return (
    <ChakraProvider theme={BaseTheme}>
      <ColorModeScript initialColorMode={BaseTheme.config.initialColorMode} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="auth">
          <Route index path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequiredAuth />}>
            //?------------------------------------------------------------
            <Route path="app" element={<RootLayout />}>
              <Route path="project">
                <Route path=":id" element={<TasksByProject />} />
              </Route>

              <Route path="projects" element={<ProjectsList />} />
              <Route path="today" element={<TodayTasks />} />
              <Route path="labels" element={<LabelsList />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Route>
          //?------------------------------------------------------------
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
