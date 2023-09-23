import React from "react"
import { Container, Search } from "./styled"

const SearchBar = ({ search, setSearch }) => {
  return (
    <Container>
      <Search
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search Pokemon"
      />
    </Container>
  )
}

export default SearchBar
