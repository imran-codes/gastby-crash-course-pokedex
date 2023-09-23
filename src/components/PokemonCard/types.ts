export type PokemonCardProps = {
  pokemon: AllPokemonNodesType
  index?: number
}

export type AllPokemonNodesType = {
  types: string[] | PokemonTypes[]
  image: string
  id: string
  name: string
}

export type PokemonTypes =
  | "water"
  | "fire"
  | "grass"
  | "bug"
  | "normal"
  | "poison"
  | "electric"
  | "ground"
  | "fairy"
  | "fighting"
  | "psychic"
  | "rock"
  | "ghost"
  | "ice"
  | "dragon"
  | "dark"
  | "steel"
  | "flying"
