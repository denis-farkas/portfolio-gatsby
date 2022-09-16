import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { css } from "@emotion/react"

const AboutMe = () => {
  return (
    <div
      css={css`
        text-align: center;
        padding: 3rem 5rem;
        margin: 0 3rem;
        background-color: #000;
        @media only screen and (min-width: 758px) {
          width: 27%;
        }

        border-radius: 12px;
      `}
    >
      <StaticImage
        src="../images/imgAvatar.jpg"
        alt="denis farkas"
        width={175}
        height={170}
      />
      <h1
        css={css`
          color: #fff;
        `}
      >
        Denis Farkas,
        <br /> développeur Web freelance,
        <br /> Marseille.
      </h1>
      <h2
        css={css`
          color: #ff9c45;
        `}
      >
        <i>
          Chercheur en sciences sociales et consultant anthropologue en Amérique
          Latine (1994 - 2014):
        </i>
      </h2>
    </div>
  )
}

export default AboutMe
