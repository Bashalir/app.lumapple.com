import React, { useState } from 'react';
import Header from '../components/Header';


import styled from 'styled-components'; //css

const StyledAddPosting = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

function AddPosting() {
  return (
    <>
      <StyledAddPosting>
<div>Déposer une annonce</div>
      </StyledAddPosting>
    </>
  );
}

export default AddPosting;
