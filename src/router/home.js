import React, { useState } from 'react';
import Header from '../components/Header';

import styled from 'styled-components'; //css

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

function Home() {
  return (
    <>
      <StyledHome>
        <Header />
      </StyledHome>
    </>
  );
}

export default Home;
