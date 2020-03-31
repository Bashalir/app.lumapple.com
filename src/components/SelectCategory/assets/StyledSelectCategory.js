import styled from 'styled-components'; //css

const StyledSelectCategory = styled.div`
  display: grid;

  margin: 0 auto;
  max-width: 1066px;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.neutral};
  h2 {
    font-size: ${({ theme }) => theme.fontsSize.header2};
    margin-left: 1vw;
    padding: 1vw;
  }
  h3 {
    font-size: ${({ theme }) => theme.fontsSize.header3};
    font-weight: 600;
    padding: 0.5vw;
  }
  .title-category {
    margin-left: 1vw;
    padding: 0 1vw;
  }
  .card-select-category {
    border-radius: 19px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
    box-shadow: 7px 7px 14px ${({ theme }) => theme.colors.neurtalGrey},
      -7px -7px 14px ${({ theme }) => theme.colors.neutralLightest};
    h3 {
      margin-left: 2vw;
    }
  }
  .select-category {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1vw 0 1vw 0;
  }
`;

export default StyledSelectCategory;
