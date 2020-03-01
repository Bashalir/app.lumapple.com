import styled from 'styled-components'; //css

const StyledInput = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 400;
  label {
    font-weight: 700;
    width: 10rem;
    display: inline-block;
  }
  input {
    width: 15rem;
    border-color: grey;
    padding: 5px;
    border: 0px;
    border-radius: 50px;

    background: ${({ theme, isError }) =>
      isError ? 'red' : theme.colors.backgroundColor};
    box-shadow: inset 4px 4px 8px #d2d2d2, inset -4px -4px 8px #ffffff;
  }
  .errorInput {
    background-color: red;
  }
`;

export default StyledInput;
