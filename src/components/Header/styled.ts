import styled from "styled-components"

export const HeaderWrapper = styled.header`
  display: flex;
  font-family: "Preahvihear";
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border-radius: 20px;
  h1 {
    font-size: 1.5rem;
  }
  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 2rem;
    margin-right: 0.5rem;
  }
`
