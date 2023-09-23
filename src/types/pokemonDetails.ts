import { PokemonTypes } from "../components/PokemonCard/types"

export type PokemonDetailsProps = {
  data: {
    allPokemon: {
      nodes: PokemonDetails[]
    }
  }
}

export type PokemonStats = {
  hp: number
  attack: number
  defense: number
  special_attack: number
  special_defense: number
  speed: number
}

export type PokemonDetails = {
  id: string
  name: string
  image: string
  types: PokemonTypes[]
  stats: PokemonStats
}
