import styled from 'styled-components';

import Wrapper from '../Wrapper';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const NavigationWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
`;

export const NavigationList = styled.ul`
  display: flex;
`;
