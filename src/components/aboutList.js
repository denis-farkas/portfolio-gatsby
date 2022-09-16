import React from "react"
import styled from "@emotion/styled"

const AboutList = () => {
  const LiList = styled.div`
    width: 95%;
    margin-left: 5%;
    display: flex;

    @media only screen and (min-width: 758px) {
      width: 27%;
      margin-left: 3%;
    }

    h2 {
      position: relative;
      font-family: "Open Sans", sans-serif;
      font-size: 1em;
      font-weight: 400;
      text-transform: uppercase;
      color: #959595;
    }
    h2:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: -10px;
      border-bottom: 3px solid #e2cef9;
      width: 30px;
    }

    ul {
      list-style: none;
      margin: 3em 0 0;
      padding: 0;
    }
    ul::after {
      clear: both;
      content: "";
      display: table;
    }
    ul li {
      margin-bottom: 2em;
    }
    @media only screen and (min-width: 700px) {
      ul li {
        float: left;
      }
      ul li:nth-of-type(2n) {
        margin-right: 0;
      }
    }
    ul li h3 {
      position: relative;
      z-index: 1;
      margin: 0;
      font-size: 1.6em;
      line-height: 2.5em;
      font-weight: 700;
      letter-spacing: 1px;
    }
    ul li h3:before {
      content: "";
      position: absolute;
      z-index: -1;
      background-color: #ff9d42;
      width: 2.5em;
      height: 2.5em;
      border-radius: 50%;
    }
    ul li h3 span {
      padding-left: 15px;
      font-weight: 700;
    }
    ul li p {
      padding-left: 15px;
      padding-right: 5px;
      font-family: "Open Sans", sans-serif;
      font-size: 1.1em;
      line-height: 1.6875em;
      font-weight: 400;
      color: #959595;
    }
  `

  return (
    <LiList>
      <ul>
        <li>
          <h3>
            <span>Facilité d'adaptation: </span>
          </h3>
          <p>
            <i>
              Savoir accéder à de nouveaux environnements culturels,
              organisationnels et techniques.
            </i>
          </p>
        </li>
        <li>
          <h3>
            <span>Coopération: </span>
          </h3>
          <p>
            <i>
              Comprendre et adopter les principes, la logique et les pratiques
              de conception de ceux avec qui je dois collaborer.
            </i>
          </p>
        </li>
        <li>
          <h3>
            <span>Écoute: </span>
          </h3>
          <p>
            <i>
              Transcrire le langage métier, les besoins fonctionnels et non
              fonctionnels d’une entreprise lors de l’élaboration du cahier des
              charges.
            </i>
          </p>
        </li>
      </ul>
    </LiList>
  )
}

export default AboutList
