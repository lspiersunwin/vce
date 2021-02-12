import React from "react"
import { Layout } from "../components"
import styled from "styled-components"
import Title from "../components/Title"
import Image from "gatsby-image"

const Introduction = ({ data }) => {
  const fluid = data.file.childImageSharp.fluid
  return (
    <Wrapper>
      <Layout>
        <div className="title-div">
          <Title title="Introduction"></Title>
        </div>
        <section className="single-article">
          <article>
            <Image fluid={fluid} alt="vc" classname="img"></Image>
          </article>
          <article>
            <p>
              <em>
                "It is ordained that the Cross shall only be awarded for most
                conspicuous bravery, or some daring or pre-eminent act of valour
                or self-sacrifice or extreme devotion to duty in the presence of
                the enemy."
              </em>
            </p>
            <br />
            <p>
              The Victoria Cross was instituted by Royal Warrant in 1856 but was
              made retrospective to 1854 to cover the period of the Crimean War.
              To date (2004) it has been awarded 1354 times, that includes three
              occasions of the award of a second medal or 'bar' and the award to
              the American 'Unknown Warrior'.
            </p>
            <br />
            <p>
              It is supposed only to be awarded for actions 'in the presence of
              the enemy' although later amendments have allowed the medal to be
              bestowed 'under circumstances of extreme danger'. Initially awards
              were made to officers under the recommendation of other officers
              and to other ranks on the recommendation of other ranks, and
              occasionally by a ballot within a regiment or unit, more recently
              it has been a requirement that at least 3 written witness
              statements of the action are required.
            </p>
            <br />
            <p>
              The first presentation was made in Hyde Park on 26 June 1857 where
              Queen Victoria decorated 62 officers and men for actions during
              the Crimean War.
            </p>
            <br />
            <p>
              Queen Victoria at the first VC investiture June 1857 Hyde Park,
              London - (Sunday School Union).
            </p>
            <br />
            <p>
              The Victoria Cross is still made by the same London jewellers,
              Hancocks and Co. (Jewellers) Ltd. - Established 1849, 1 Burlington
              Gardens, London W1X 2HP, U.K. from the bronze of Chinese cannons
              captured from the Russians at the siege of Sebastopol, although
              there is some doubt about the authenticity of the bronze content
              of some medals awarded in WW1 (notably that of Robert Vaughan
              Gorle awarded at Legedhem, Belgium in 1918 RCL Corps Gazette
              October 1997 pg 358). The Cross and suspender are first cast in
              gunmetal and then chased and finished by hand; from 1914 to 1950 a
              die-cast suspender was used.
            </p>
            <br />
            <p>
              The metal is taken [supposedly!] from guns captured from the
              Russians in the Crimean War (although during and after the First
              World War it is fairly certain that metal from captured Chinese
              guns was used for a short period). The components of the
              decoration are then treated chemically to obtain the uniform dark
              brown finish which is darker on some issues than on others.
            </p>
            <br />
            <p>
              Painting of the 1st Investiture at Hyde Park by Constanin Guys -
              (Illustrated London News)
            </p>
            <br />
            <p>
              The Cross is 1.375 inches wide and, together with the suspender
              bar and link, weighs about 0.87 ounces troy, although chasing and
              finishing may cause slight variation in these figures. The design
              of the Cross is attributed to H.H. Armstead who at the time of its
              inception was working for Hancocks, the design then being approved
              by Queen Victoria.
            </p>
            <br />
            <p>
              A little known fact, even to many "experts" is that the metal used
              to forge every Victoria Cross is tended by 15 Regiment Royal
              Logistic Corps in Donnington. The VC metal rarely sees the light
              of day as it is secured in a special vault and is removed only
              under exceptional circumstances; however, this item of national
              history has been transported to the Imperial War Museum in London
              for the royal opening of the Victoria Cross and George Cross
              Exhibition. Weighing 358 ounces and looking somewhat like a lump
              of cheese, the VC metal is unique among BOD Donnington's 700,000
              item headings of Army stores. It is all that remains of the bronze
              cascabels from two Russian cannon captured at Sebastopol, the last
              great battle of the Crimean War in 1854-55. The cascabel, a large
              knob at the rear of the cannon, held ropes which were used when
              the artillery piece was being man-handled. The two cannon, minus
              cascabels, stand proudly outside the Officers Mess in Woolwich.
              The most recent issue [to date of writing] of metal, exactly fifty
              ounces and sufficient to make twelve medals, occurred on 23
              October 1959, to Messrs Hancocks & Co (Jewellers) Ltd, the royal
              jewellers who have been responsible for individually making each
              medal since the inception of the VC in 1856. Given that fifty
              ounces are required to make twelve Victoria Cross medals, the
              remaining 358 ounces contain enough for a further eighty five.
            </p>
            <br />
            <p>
              Originally the ribbon was dark blue for the Royal Navy and crimson
              for the Army. Shortly before the Royal Air Force was formed on 1st
              April 1918 the King approved the recommendation that what had been
              the Army ribbon should be adopted by all recipients. When the
              ribbon is worn alone a miniature of the Cross is pinned on it, a
              bar being indicated by a second miniature worn beside the first
              (when first approved in 1916, a single miniature indicated the
              award of a bar; from 1917 this was changed to the current
              configuration). Details of the recipient are engraved in capital
              letters on the reverse of the suspender bar, and the date or dates
              of the act of gallantry in the centre circle of the reverse of the
              Cross. The style of engraving varies although, generally speaking,
              the use of serifs seem to have been discontinued during the South
              African War (Boer) War. However, King Edward VII having approved
              posthumous issues, some comparatively modern Crosses exist which
              were awarded for services performed many years before. Sometimes
              the inscription is of the same colour as the decoration itself.
              The latter practise seems to have been more general before the
              Boer War although thereafter no particular pattern is apparent.
            </p>
            <br />
            <p>
              The details on the suspender bar include the rank, name and
              regiment, or other description of the recipient. Abbreviations are
              used, according to the length of the inscription, and during the
              First World War the practise of adding the regimental or
              equivalent number in the case of recipients below commissioned
              rank was introduced. Occasionally the recipient's full (or
              abbreviated) first names appear. The First World War and later
              inscriptions tend to be fuller than those appearing previously.
              The details on the reverse of the Cross give the date or dates of
              the act concerned, the month usually being abbreviated.
            </p>
            <br />
            <p>
              Occasionally a recipient has been issued with a replacement which,
              in itself, cannot readily be detected, although suspicion may be
              aroused if the accompanying medals are themselves replacement
              issues. Hancocks are able to say if a replacement has been issued.
            </p>
            <br />
            <p>Hyde Park 1st Investiture by George H Thomas.</p>
            <br />
            <p>
              Various types of copy exist, some cast examples being very well
              made indeed. However, due to the cooling of the metal in the
              mould, they are slightly smaller than the genuine Crosses and not
              of the correct weight. Nevertheless, Hancocks do not consider the
              weight of great importance as the thickness of the decoration can
              vary, especially with early issues. Some copies are struck from
              dies which, together with some of those cast, are poorly finished
              and of too light a colour. On one type of copy the sides of the
              suspender bar are not straight but have a curved excrescence
              either side of the ribbon slot, while another type has V-shaped
              niches at either end of the ribbon slot. Some years ago a
              particularly well-made copy appeared on the market; in this,
              however, the inner diameter of the centre circle of the reverse is
              14mm which is too wide and hence relatively easily recognisable.
              Some copies have been faked by the addition of details of actual
              recipients although usually the engraving is of poor quality.
              Hancocks can almost invariably state whether a Cross is genuine or
              not.
            </p>
            <br />
            <p>
              Nowadays there is a requirement for at least three witnesses to
              make a sworn statement attesting to the exact circumstances
              involved in any action that may result in the award of the
              Victoria Cross.
            </p>
            <br />
            <p>
              It was not until 1920 that an official amendment was made allowing
              the VC to be awarded posthumously. Although when first instituted
              the original warrant made no mention to posthumous awards it had
              been decided from the very beginning that the VC would not be
              given for an act in which the potential recipient was killed, or
              where he died shortly after. In these circumstances an
              announcement was made in the London Gazette that had the person
              survived they would have been recommended for the VC and there
              were six instances of this between 1859 and 1897 although there
              would surely have been more put forward if there was a chance of
              receiving the VC. However, in December 1899 the VC was awarded to
              Frederick Hugh Sherston Roberts although he died just over 24
              hours after the act, and then two years later a further six were
              awarded. Finally, in 1907 the six instances between 1859 and 1897
              were retrospectively awarded. Until 1977 it was the only British
              medal apart from a Mention in Dispatches that could be awarded
              posthumously. It is not just a British award, but also a
              Commonwealth one; it was extended to members of the Colonial
              Forces in New Zealand and other parts of the Empire in 1867 and to
              the officers and men of the Indian Army in 1911. There is no
              barrier of colour, race, creed, sex or rank.
            </p>
          </article>
        </section>
      </Layout>
    </Wrapper>
  )
}

export default Introduction

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

  .title-div {
    margin-top: 0.75rem;
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

export const query = graphql`
  {
    file(relativePath: { eq: "vc.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
