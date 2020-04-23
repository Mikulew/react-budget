import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.sm}px 0;
  background-color: ${({ theme }) => theme.colors.gray.light};
`;

export const NavigationList = styled.ul`
  display: flex;
`;
