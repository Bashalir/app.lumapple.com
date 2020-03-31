import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border-radius: 19px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  box-shadow: 7px 7px 14px ${({ theme }) => theme.colors.neurtalGrey},
    -7px -7px 14px ${({ theme }) => theme.colors.neutralLightest};
  h3 {
    margin-left: 2vw;
  }
`;

export default function Card() {
  return <StyledCard></StyledCard>;
}
