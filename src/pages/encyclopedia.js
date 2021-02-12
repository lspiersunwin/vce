import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components"
// import { Layout, Encyclopedia, Algolia } from "../components"
import List from "../components/List"

const ProjectsPage = ({ data }) => {
  const {
    allAirtable: { nodes: encyclopedia },
  } = data

  return (
    <Wrapper>
      <Layout>
        <List encyclopedia={encyclopedia} title="The encyclopdeia" page />
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-55);
  }
`

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Encyclopedia" } }) {
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

export default ProjectsPage
