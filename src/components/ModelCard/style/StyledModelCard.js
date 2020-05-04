import styled from 'styled-components'; //css

const StyledModelCard = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    animation: photo-position--out 250ms ease-in;
    object-position: 100% 25px;
  }
  label {
    margin-top: 10px;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  @keyframes photo-position--in {
    from {
      object-position: 100% 25px;
    }
    to {
      object-position: 100% 10px;
    }
  }

  @keyframes photo-position--out {
    from {
      object-position: 100% 10px;
    }
    to {
      object-position: 100% 25px;
    }
  }
  :hover {
    img {
      animation: photo-position--in 250ms ease-in;
      object-position: 100% 10px;
      /* transform: translateY(-20px); */
    }

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

export default StyledModelCard;
