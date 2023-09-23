import React from "react"
import { PokemonCardProps } from "./types"
import { Container } from "./styled"

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, index }) => {
  return (
    <Container types={pokemon?.types[0]}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.name}</p>
      <p>{index !== undefined ? index + 1 : null}</p>
    </Container>
  )
}

export default PokemonCard
