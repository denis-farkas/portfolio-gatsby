import React from "react"
import { css } from "@emotion/react"
import RechartsPHP from "../components/PhpChart"
import RechartsJS from "../components/jsChart"
import RechartsBdd from "../components/bddChart"
import RechartsIntg from "../components/integrChart"

const Skills = () => {
  return (
    <div
      css={css`
        margin: 0 auto;
        padding: 30px;
        background-color: #000;

        @media (min-width: 768px) {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
        }
      `}
    >
      <div
        css={css`
          text-align: center;
          width: 100%;
          color: #ff9c45;
        `}
      >
        <h1
          css={css`
            margin: 30px;
          `}
        >
          Mon environnement technologique:
        </h1>
      </div>
      <RechartsPHP />
      <RechartsJS />
      <RechartsBdd />
      <RechartsIntg />
    </div>
  )
}

export default Skills
