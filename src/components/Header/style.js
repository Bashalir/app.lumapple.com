import styled from 'styled-components';
import Header from './index';

const StyledHeader = styled(Header)`
header {
  width: 100vw;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
}
`;


export default StyledHeader;
