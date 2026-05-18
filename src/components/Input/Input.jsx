import styled from "styled-components";

export const Input = styled.input`
  width: 100%;

  padding: 0.8rem;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.muted};

  outline: none;

  font-size: ${({ theme }) => theme.fontSizes.base};

  color: ${({ theme }) => theme.colors.text};

  margin-top: 1rem;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
