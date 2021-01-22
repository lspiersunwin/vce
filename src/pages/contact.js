import React from "react"
import styled from "styled-components"
import { Layout } from "../components"

const Contact = () => {
  return (
    <Wrapper>
      <Layout>
        <section className="contact-page">
          <article className="contact-form">
            <h3>get in touch</h3>
            <form action="https://formspree.io/f/xnqobdeq" method="POST">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                />
                <textarea
                  name="message"
                  rows="5"
                  placeholder="message"
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                submit here
              </button>
            </form>
          </article>
        </section>
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

  .contact-page {
    display: grid;
    place-items: center;
    padding: 5rem 0;
  }
  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;
  }
  .contact-form:hover {
    box-shadow: var(--dark-shadow);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }

  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }

  .btn {
    width: 100%;
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
`

export default Contact
