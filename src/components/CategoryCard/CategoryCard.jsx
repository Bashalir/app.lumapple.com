import React from 'react';
import styled from 'styled-components';

const StyledCategoryCard = styled.div`
text-align:center;
color:${({ theme }) => theme.colors.neutral};

figure {
  display:flex;
  justify-content:center;
  align-items:center;
  width:75px;
height:75px;
margin: 0 0 5px 0;
border-radius: 19px;
background: #F7F7F7;
box-shadow:  7px 7px 14px #e8e8e8,
             -7px -7px 14px #ffffff;
  background-color: ${({ theme }) => theme.colors.backgroundPrimaryColor};

}
img{
  width:50px;
  height:50px;

}
label {
padding-top:10px;
font-family: ${({ theme }) => theme.fonts.primary};
}

`;

export default function CategoryCard(props) {
  return (
    <StyledCategoryCard>
      <figure>
        <img src={props.img}/>
        </figure>
        <label>{props.name}</label>

    </StyledCategoryCard>
  );
}
