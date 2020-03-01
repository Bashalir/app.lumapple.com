import React from 'react';
import styled from 'styled-components';


const StyledCard = styled.div`
width:75px;
height:75px;
margin-bottom: 5px;
border-radius: 19px;
background: #F7F7F7;
box-shadow:  7px 7px 14px #e8e8e8,
             -7px -7px 14px #ffffff;
  background-color: ${({ theme }) => theme.colors.backgroundPrimaryColor};
`;

export default function Card() {
  return (
    <StyledCard>
    </StyledCard>
  );
}
