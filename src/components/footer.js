import React from "react"
import { css } from "@emotion/react"

const Footer = () => {
  return (
    <div>
      <footer
        css={css`
          background-color: #000;
          padding: 1rem;
          height: 60px;
        `}
      >
        <div
          css={css`
            max-width: 1400px;
            margin: 0 auto;
            color: #ff9c45;

            display: flex;
            align-items: center;
            justify-content: center;
          `}
        >
          <h4>Copyright © 2022 Cloudefar</h4>
        </div>
      </footer>
    </div>
  )
}

export default Footer
