import React from 'react';
import styled from 'styled-components';
import CategoryBar from './CategoryBar';

const StyledMain = styled.div`
display:grid;
height:120px;

`;

export default function Main() {
  return (
    <StyledMain>
<CategoryBar/>
    </StyledMain>

  );
}
