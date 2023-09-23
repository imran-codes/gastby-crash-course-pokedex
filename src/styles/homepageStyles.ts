import { styled } from "styled-components"

export const HomeTitle = styled.h1`
  font-size: 4rem;
  font-family: "Preahvihear";
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
`

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  text-align: center;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 2rem;
  gap: 1rem;
  border-radius: 20px;
  max-width: 600px;
  text-align: center;
`
