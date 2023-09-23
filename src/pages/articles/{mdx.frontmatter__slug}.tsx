import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import Seo from "../../components/seo"
import React from "react"

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

const PokeBlogPost: React.FC<any> = ({ data, children }) => {
  return (
    <Layout>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default PokeBlogPost
