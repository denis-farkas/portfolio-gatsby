import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 760px;
`
const TextImage = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.25),
    rgba(34, 49, 63, 0.05)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: start;
  justify-content: top;

  h1 {
    font-size: 4rem;
    color: #fff;
    margin-bottom: 0rem;
    margin-top: 2rem;
    @media (min-width: 992px) {
      font-size: 5.8rem;
      margin-top: 4rem;
      margin-left: 18rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 2rem;
    color: #ff9c45;
    margin-top: 0rem;
    @media (min-width: 992px) {
      font-size: 2.6rem;
      margin-top: 0rem;
      margin-left: 18rem;
    }
  }
`

const ImageWork = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "imageWork.jpg" }) {
        sharp: childImageSharp {
          fluid {
            srcSet
          }
        }
      }
    }
  `)
  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextImage>
        <h1>Denis Farkas</h1>
        <p>Développeur applications Web</p>
      </TextImage>
    </ImageBackground>
  )
}

export default ImageWork
