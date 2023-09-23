import { styled } from "styled-components"

export const Article = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1rem;
  cursor: pointer;
`
