import { styled } from "styled-components"
import { PokemonTypes } from "./types"

export const Container = styled.div<{ types: PokemonTypes | string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  background-color: ${({ types }) => {
    switch (types) {
      case "water":
        return "#4FC1FF"
      case "fire":
        return "#FFA756"
      case "grass":
        return "#8BBE8A"
      case "bug":
        return "#8BD674"
      case "normal":
        return "#B5B9C4"
      case "poison":
        return "#9F6E97"
      case "electric":
        return "#FFD86F"
      case "ground":
        return "#F78551"
      case "fairy":
        return "#EFA8E4"
      case "fighting":
        return "#EB4971"
      case "psychic":
        return "#FF6568"
      case "rock":
        return "#D4C294"
      case "ghost":
        return "#8571BE"
      case "ice":
        return "#91D8DF"
      case "dragon":
        return "#7383B9"
      case "dark":
        return "#6F6E78"
      case "steel":
        return "#4C91B2"
      case "flying":
        return "#748FC9"
      default:
        return "#fff"
    }
  }};
  img {
    width: 150px;
    object-fit: contain;
  }
  h2 {
    margin: 0;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`
