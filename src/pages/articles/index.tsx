import * as React from "react"
import Seo from "../../components/seo"
import Layout from "../../components/Layout"
import { HomeTitle } from "../../styles/homepageStyles"
import { Link, graphql } from "gatsby"
import { PokeBlogsProps } from "../../types/articles"
import { Article } from "../../styles/articlePageStyles"

export const query = graphql`
  query PokeBlogs {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        excerpt
      }
    }
  }
`

const PokeBlogs: React.FC<PokeBlogsProps> = ({ data }) => {
  const {
    allMdx: { nodes },
  } = data
  return (
    <Layout>
      <HomeTitle>PokeBlogs</HomeTitle>
      {nodes.map(node => (
        <Article key={node.id}>
          <Link to={`${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </Article>
      ))}
    </Layout>
  )
}

export const Head = () => <Seo title="Poke Blogs" />

export default PokeBlogs
