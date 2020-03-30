import styled from 'styled-components'; //css

const StyledFigure = styled.figure`
  z-index : 1;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 75px;
  height: 75px;
  margin: 0 0 5px 0;

  border-radius: 19px;

::before {
    z-index: 2;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 1;

    border-radius: 19px;
    box-shadow: 7px 7px 14px ${({ theme }) => theme.colors.neutralGrey},
                 -7px -7px 14px ${({ theme }) => theme.colors.neutralLightest};
    background-color: ${({ theme }) => theme.colors.backgroundPrimaryColor};

    transition: opacity 500ms;
  }

  ::after {
    z-index: -1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;

    border-radius: 19px;
    box-shadow: inset 7px 7px 14px ${({ theme }) => theme.colors.neutralGrey},
                inset -7px -7px 14px ${({ theme }) =>
                  theme.colors.neutralLightest};
    background-color: ${({ theme }) => theme.colors.backgroundPrimaryColor};

    transition: opacity 500ms;
  }

  
  }
`;

export default StyledFigure;
