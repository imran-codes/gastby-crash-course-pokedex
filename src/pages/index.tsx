import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import { FilterContainer, PokemonGrid } from "../styles/homepageStyles"
import { Link, graphql } from "gatsby"
import { AllPokemonType } from "../types/pokemon"
import PokemonCard from "../components/PokemonCard"
import SearchBar from "../components/Searchbar"
import Dropdown from "../components/Dropdown"

export const pageQuery = graphql`
  query AllPokemonQuery {
    allPokemon {
      nodes {
        types
        image
        id
        name
      }
      totalCount
    }
  }
`

type IndexPageProps = {
  data: AllPokemonType
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  const numberOfPokemon = data?.allPokemon?.totalCount
  const allPokemon = data?.allPokemon?.nodes

  const [search, setSearch] = React.useState("")
  const [type, setType] = React.useState("")

  return (
    <Layout>
      <FilterContainer>
        <h1>Pokedex</h1>
        <p>Total Number Of Pokemon: {numberOfPokemon}</p>
        <p>
          Search for a Pokemon by name or use the dropdown to select a Pokemon
          type or use both.
        </p>
        <SearchBar search={search} setSearch={setSearch} />
        <Dropdown setType={setType} />
      </FilterContainer>
      <PokemonGrid>
        {allPokemon
          ?.filter(pokemon => {
            if (!type && !search) return pokemon
            if (type && !search) {
              return pokemon.types.includes(type)
            }
            if (!type && search) {
              return pokemon.name.toLowerCase().includes(search.toLowerCase())
            }
            if (type && search) {
              return (
                pokemon.types.includes(type) &&
                pokemon.name.toLowerCase().includes(search.toLowerCase())
              )
            }
          })
          ?.map((pokemon, index) => (
            <Link to={`/pokemon/${pokemon.name}`} key={pokemon.id}>
              <PokemonCard index={index} pokemon={pokemon} />
            </Link>
          ))}
      </PokemonGrid>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
