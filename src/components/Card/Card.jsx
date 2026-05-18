import styled from "styled-components";

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};

  border: 1px solid ${({ theme }) => theme.colors.muted};

  padding: 1.5rem;

  border-radius: 10px;

  margin-top: 2rem;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;
