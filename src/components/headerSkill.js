import React from "react"
import { css } from "@emotion/react"
import { StaticImage } from "gatsby-plugin-image"

const HeaderSkill = () => {
  return (
    <div
      css={css`
        text-align: center;
        background-color: #fff5ec;
        padding: 60px 15px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
      `}
    >
      <article
        css={css`
          width: 27%;
          height: 100px;
          text-align: center;
          background-color: #fff5ec;
          padding: 10px 15px;
          border: 1px solid #000;
          border-radius: 10px;
          display: flex;

          @media (max-width: 768px) {
            width: 98%;
            margin: 10px 10px;
          }
        `}
      >
        <StaticImage
          src="../images/resurg.png"
          alt="logo resurgences"
          layout="fixed"
          width={90}
          height={90}
        />
        <h3
          css={css`
            padding: 0 10px;
          `}
        >
          Insertion Formation/Travail:
          <br /> Développement applications Web <br />
          Résurgences - 2019/2020
        </h3>
      </article>
      <article
        css={css`
          width: 27%;
          height: 100px;
          text-align: center;
          background-color: #fff5ec;
          padding: 10px 15px;
          border: 1px solid #000;
          border-radius: 10px;
          display: flex;

          @media (max-width: 768px) {
            width: 98%;
            margin: 10px 10px;
          }
        `}
      >
        <StaticImage
          src="../images/plate.png"
          alt="logo laplateforme"
          layout="fixed"
          width={105}
          height={90}
        />
        <h3
          css={css`
            padding: 0 30px;
          `}
        >
          Certification Niveau 5:
          <br /> Développement applications Web <br /> La Plateforme - 2021
        </h3>
      </article>
      <article
        css={css`
          width: 27%;
          min-width: 403px;
          height: 100px;
          text-align: center;
          background-color: #fff5ec;
          padding: 10px 15px;
          border: 1px solid #000;
          border-radius: 10px;
          display: flex;

          @media (max-width: 800px) {
            width: 98%;
            margin: 10px 10px;
          }
        `}
      >
        <StaticImage
          src="../images/open.jpg"
          alt="logo openclassrooms"
          layout="fixed"
          width={90}
          height={85}
        />
        <h3
          css={css`
            padding: 0 60px;
          `}
        >
          Certification Niveau 6: <br /> spécialisation Frontend <br />
          Openclassrooms - 2022
        </h3>
      </article>
    </div>
  )
}

export default HeaderSkill
