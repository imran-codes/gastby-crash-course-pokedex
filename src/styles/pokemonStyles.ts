import { Link } from "gatsby"
import { styled } from "styled-components"

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  gap: 1rem;
  border-radius: 20px;
  max-width: 600px;
  p {
    font-size: 1.2rem;
  }
  strong {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`
export const BackButton = styled(Link).attrs({ to: "/" })`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-decoration: none;
  width: fit-content;
  padding: 0.75rem 1rem;
  border-radius: 50%;
  margin-bottom: 10px;

  &:hover {
    text-decoration: none;
  }
`
