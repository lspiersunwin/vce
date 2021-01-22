import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components"
import Image from "gatsby-image"
import Title from "../components/Title"

const articleTemplate = ({ data }) => {
  const fluid = data.file.childImageSharp.fluid
  return (
    <Wrapper>
      <Layout>
        {/* Text align this div */}
        <div>
          <Title title="Derrick Unwin"></Title>
        </div>

        <section className="single-article">
          <article>
            <Image fluid={fluid} alt="about" classname="img"></Image>
          </article>
          <article>
            <p>
              This became a mammoth task, and has, so far, (2018) taken 13 years
              labour. I decided to run 1 final edit and update which finished on
              6 November 2018.
            </p>
            <br />
            <p>
              I have read a great deal on the subject, many authors, very fine
              publications, (see my HUGE references), but was never able to find
              the ultimate book that I wanted. I read excellent treatise on
              individuals and their acts of courage, less formal works of units,
              regiments and services, of awards made to Commonwealth troops,
              more recently at some of the many web sites and links that have
              appeared on the Internet, (I have referenced many of them and do
              apologise if they are no longer active, but I thought it worth
              adding them anyway), all excellent and all giving more snippets of
              information both on the deed and the private life of the
              individual concerned both pre and post the action; but was never
              able to actually get what I wanted - so here is what I was looking
              for, many years after I first decided to do it, but better late
              than never.
            </p>
            <br />
            <p>
              The short history of the Victoria Cross is intricate to say the
              least; every award has a story a sub plot and a human content as
              well as the actual history of the action involved.
            </p>
            <br />
            <p>
              I needed to decide exactly how I intended the book to 'look', how
              far (or not) I was going to take the '1354 + actors', at once I
              was caught out by the sheer size of what I wanted to accomplish,
              it would need to be at least 1354 pages, and if I wanted
              photographs......
            </p>
            <br />
            <p>
              However, that aside, in my earlier studies I wanted a 'list' as it
              were, from the first to the latest,{" "}
              <em>
                [[H Jones got his VC while I was thinking of the project, and
                Johnson Beharry whilst I was working through the Crimea, THEN
                Brian Budd as I was working through, believe it or not, turn of
                the century Afghanistan, and, of course, they continued with my
                countryman [and proud I am!] – Willie Apiata and brave Aussie
                Mark Donaldson]]
              </em>{" "}
              - with as much information as possible about the award, and the
              person that earned it, even though there are many awards in the
              earlier days (and some more recent) when very very little is known
              of the brave man, who is invariably buried in and ‘unmarked plot
              or grave’ – (to the disgrace of his Regiment I might add!).
            </p>
            <br />
            <p>
              I wanted any relevant 'yarns' even some irrelevant information
              that was ‘interesting none the less’. The book covers every VC
              awarded, not in a very strict order, but by year and area earned.
              As I am sure the reader will know, this is a moving feast, every
              week something changes, a VC is sold, loaned, moved, or even
              awarded, so forgive me if you get this to read, only for it to be
              out of date by and hour or a week more or less……..
            </p>
            <br />
            <p>
              I am going to describe in as much detail as I can, the individual
              (or in many cases collective) incident that caused the award to be
              made, adding interesting if irrelevant information when I think it
              might be entertaining or add some more interest to the event.
            </p>
            <br />
            <p>
              I am going to reproduce the London Gazetted citation, maybe not
              word for word, but an accurate rendition, and I will offer links
              to other books and web sites that may be relevant to the specific
              award.
            </p>
            <br />
            <p>
              There is a wealth of common knowledge that I have dipped into, I
              have referenced everyone who I have read or who's website I have
              accessed, and apologise if I have missed anyone out, I have tried
              to email some people who I have quoted to gain their permission,
              but on occasion, the emails have not been delivered or opened.
            </p>
            <br />
            <p>
              So - this is a list from the first award to the last yet awarded –
              New Zealand's Willie Apiata actually.
            </p>
            <br />
            <p>
              This is a book of 1354 (more if you count 3 bars and one to the
              American 'Unknown Warrior' and most recently Johnston Beharry,
              Bryan Budd & Willie Apiata AND more recent) chapters, and the Lord
              knows how many pages.
            </p>
            <br />
            <p>
              I thought it only fair and without a doubt appropriate that each
              of these brave individuals had their own chapter.
            </p>
          </article>
        </section>
        <div className="btn-section">
          <Link to="/encyclopedia" className="btn">
            Back to Encyclopedia
          </Link>
        </div>
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);

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

  .single-article {
    width: 90vw;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 2rem auto;
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
