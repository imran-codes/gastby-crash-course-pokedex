export type AllPokemonType = {
  allPokemon: {
    nodes: {
      types: string[]
      image: string
      id: string
      name: string
    }[]
    totalCount: number
  }
}
