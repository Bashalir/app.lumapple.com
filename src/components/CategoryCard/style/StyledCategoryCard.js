import styled from 'styled-components'; //css

const StyledCategoryCard = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
  label {
    margin-top: 10px;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  :hover {
    figure {
      ::before {
        opacity: 0;
      }
      ::after {
        opacity: 1;
      }
    }
    label {
      ::before {
        opacity: 1;
      }
    }
  }

  :active {
    img {
      transform: scale(0.98);
    }
    label {
      ::before {
        opacity: 0;
      }
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export default StyledCategoryCard;
