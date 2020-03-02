import React, { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components'; //css
import SelectCategory from '../components/SelectCategory/SelectCategory';

const StyledSellNow = styled.div`
  display: block;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

function SellNow() {
  return (
    <>
      <StyledSellNow>
<SelectCategory />
      </StyledSellNow>
    </>
  );
}

export default SellNow;
