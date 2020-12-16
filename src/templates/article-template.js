import React from "react"
import ReactMarkdown from "react-markdown"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout, Encyclopedia, Algolia } from "../components"
import Image from "gatsby-image"
import Title from "../components/Title"
import List from "../components/List"

const articleTemplate = ({
  data: {
    article: {
      data: { name, date, location, text, image },
    },
  },
}) => {
  const fluid = image.localFiles[0].childImageSharp.fluid
  return (
    <Wrapper>
      <Layout>
        {/* Text align this div */}
        <div className="head-div">
          <Title title={name}></Title>
        </div>

        <section className="single-article">
          <article>
            <Image fluid={fluid} alt={name} classname="img"></Image>
          </article>
          <article>
            <ReactMarkdown source={text} />
          </article>
        </section>
        <div className="btn-section">
          {/* <button > */}
          <Link to="/encyclopedia" className="btn">
            Back
          </Link>
          {/* </button> */}
        </div>
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: airtable(data: { slug: { eq: $slug } }) {
      data {
        name
        date
        location
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
`

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);

  .head-div {
    margin-top: 1rem;
  }

  .single-article {
    width: 90vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 2rem auto;
  }

  .btn-section {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .btn {
    width: 25%;
    margin: 1rem 0;

    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
  .btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-8);
  }

  .btn a {
    color: white;
  }

  .img {
    height: 10rem;
    border-radius: var(--radius);
    transition: var(--transition);
  }

  p {
    margin: 0;
    color: black;
  }

  @media screen and (min-width: 768px) {
    .single-article {
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 2rem;
      column-gap: 2rem;
    }
  }

  nav {
    background: var(--clr-primary-55);
  }
`

export default articleTemplate
