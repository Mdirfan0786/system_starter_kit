import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;

  padding: 0.7rem 1.3rem;

  border: none;
  border-radius: 6px;

  font-weight: 600;
  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;
  }

  ${({ variant, theme }) =>
    variant === "outline" &&
    `
      background: transparent;
      color:${theme.colors.primary};
      border:2px solid ${theme.colors.primary};
    `}
`;
