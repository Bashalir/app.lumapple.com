import React, { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

import styled from 'styled-components'; //css

const StyledHome = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

function Home() {
  return (
    <>
      <StyledHome>
        <Header />
        <Main />
      </StyledHome>
    </>
  );
}

export default Home;
