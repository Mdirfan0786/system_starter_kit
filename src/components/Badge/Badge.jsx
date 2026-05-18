import styled from "styled-components";

export const Badge = styled.span`
  display: inline-block;

  margin-top: 1rem;

  padding: 0.3rem 0.8rem;

  border-radius: 999px;

  font-size: 0.75rem;
  font-weight: bold;

  background: ${({ theme }) => theme.colors.primary}33;

  color: ${({ theme }) => theme.colors.primary};
`;
