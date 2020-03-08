import styled from 'styled-components'; //css
import Sign from './index.jsx';

const StyledSign = styled.div`

display:block;
line-height:60px;
div {
  line-height:1.5em;
  display:flex;
  flex-direction:column;
 align-items:center;
 justify-content:center;
cursor: pointer;
  align-content:center;
  height:60px;
  img {
  width:25px;
  height:25px;
}
}
span {


  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.neutralLightest};
  font-weight:600;
}
`;

export default StyledSign;
