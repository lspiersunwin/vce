import React from "react"
import { Link } from "gatsby"
import Title from "./Title"
import styled from "styled-components"
import Image from "gatsby-image"
import SearchButtons from "./SearchButtons"

const List = ({ encyclopedia: data, title }) => {
  const [articles, setArticles] = React.useState(data)

  const setBackToAll = () => {
    setArticles(data)
  }

  return (
    <Wrapper className="section">
      <Title title={title || "Articles"} />
      <SearchButtons
        articles={data}
        setArticles={setArticles}
        setBackToAll={setBackToAll}
      />

      <div className="section-center">
        {articles.map(item => {
          const { id } = item
          const { name, date, slug } = item.data

          return (
            <article key={id}>
              <div className="container">
                <div className="test">
                  <p>- {name} -</p>
                  <p>{date}</p>
                  <Link to={`/article/${slug}`} className="btn">
                    Read Article
                  </Link>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  color: var(--clr-black);
  .section-center {
    margin-top: 2rem;
    max-width: var(--max-width);
    display: grid;
    gap: 2rem;
    /* safari workaround */
    grid-gap: 1.5rem;

    article {
      box-shadow: var(--light-shadow);
      border-radius: var(--radius);
      transition: var(--transition);
    }
    article:hover {
      box-shadow: var(--dark-shadow);
    }
    .container {
      text-align: center;
      position: relative;
      overflow: hidden;
      border-radius: var(--radius);
      background: var(--clr-primary-55a);

      .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        opacity: 0;
        transition: var(--transition);
        color: var(--clr-white);
        text-align: center;
        p {
          margin-bottom: 0.5rem;
          color: var(--clr-white);
          text-transform: uppercase;
        }
      }
      &:hover .info {
        opacity: 1;
      }
    }
    @media (min-width: 768px) {
      .img {
        height: 15rem;
      }
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      .img {
        height: 12.5rem;
      }
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (min-width: 1200px) {
      .img {
        height: 15rem;
      }
    }
  }
  a {
    display: block;
    width: 9rem;
    text-align: center;
    margin: 0 auto 1rem;
  }
`

export default List
