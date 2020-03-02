import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import RouteWithSubRoutes from './utils';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import styled from 'styled-components'; //css

const StyledHome = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

function Home({ routes }) {
  return (
    <>
      <StyledHome>
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </StyledHome>
    </>
  );
}

export default Home;
