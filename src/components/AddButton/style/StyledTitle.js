import styled from 'styled-components'; //css

const StyledText = styled.span`
  padding: 0 15px 0 0px;
  font-size: 1rem;
  font-weight: 800;
  text-align: center;
  position: relative;
  z-index: 1;

  ::after {
    padding: 0 15px 0 0px;
    text-align: center;
    content: "${(props) => props.name}";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    color: ${({ theme }) => theme.colors.primaryDark};
    transition: opacity 500ms;
  }

`;

export default StyledText;
