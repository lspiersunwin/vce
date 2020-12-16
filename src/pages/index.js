import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Encyclopedia,
  Slider,
  GridEncyclopedia,
  Sidebar,
} from "../components"
import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: encyclopedia },
  } = data

  return (
    <Layout>
      <Hero />
      <About />
      <Encyclopedia encyclopedia={encyclopedia} title="Featured Articles" />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Encyclopedia" } }
      sort: { fields: data___date, order: ASC }
      limit: 3
    ) {
      nodes {
        id
        data {
          name
          slug
          date
          location
          type
          text
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
