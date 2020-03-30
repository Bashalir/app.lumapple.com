import styled from 'styled-components'; //css
import Add from '../img/add.svg';
import AddActive from '../img/add-active.svg';

const StyledAddButton = styled.button`
  display: flex;
  z-index: 1;
  font-size: 1rem;
  font-weight: 800;
  line-height: 1.7rem;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  border: 0px;
  border-radius: 19px;
  font-family: ${({ theme }) => theme.fonts.primary};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.neutralLighter};
  padding: 5px 0;
  position: relative;
  outline: 0;

  ::before {
    z-index: 1;
    opacity: 1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 19px;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: 4px 4px 11px ${({ theme }) => theme.colors.primaryDark},
      -4px -4px 11px ${({ theme }) => theme.colors.shadowLight};
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
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    box-shadow: inset 4px 4px 11px ${({ theme }) => theme.colors.primaryDark},
      inset -4px -4px 11px ${({ theme }) => theme.colors.shadowLight};
    transition: opacity 500ms;
  }
  :hover {
    ::before {
      opacity: 0;
    }
    ::after {
      opacity: 1;
    }
  }

  :active {
    span {
      transform: scale(0.98);
    }
    div {
      transform: scale(0.95);
    }
  }
`;

export default StyledAddButton;
