import React from "react"
import styled from "styled-components"

const SearchButtons = ({ articles, setArticles, setBackToAll }) => {
  const [index, setIndex] = React.useState(0)
  const types = [
    "all",
    ...new Set(
      articles.map(article => {
        return article.data.type
      })
    ),
  ]

  const showArticles = (type, typeIndex) => {
    setIndex(typeIndex)
    if (type === "all") {
      setBackToAll()
    } else {
      const tempArticles = articles.filter(
        article => article.data.type === type
      )
      setArticles(tempArticles)
    }
  }
  return (
    <Wrapper>
      {types.map((type, typeIndex) => {
        return (
          <button
            key={typeIndex}
            className={index === typeIndex ? "active" : undefined}
            onClick={() => showArticles(type, typeIndex)}
          >
            {type}
          </button>
        )
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
