export type PokeBlogsProps = {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          date: string
          title: string
          slug: string
        }
        id: string
        excerpt: string
      }[]
    }
  }
}
