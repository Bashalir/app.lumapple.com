import styled from 'styled-components'; //css

const StyledName = styled.label`
  z-index: 1;
  position: relative;

  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.primary};

  ::before {
    z-index: 2;
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

export default StyledName;
