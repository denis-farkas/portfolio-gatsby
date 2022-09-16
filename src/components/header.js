import React from "react"
import { css } from "@emotion/react"
import Navigation from "./nav"
import LogoWork from "./logoWork"

const header = () => {
  return (
    <div>
      <header
        css={css`
          background-color: #000;
          padding: 1rem;
        `}
      >
        <div
          css={css`
            max-width: 1400px;
            margin: 0 auto;

            @media (min-width: 768px) {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          `}
        >
          <LogoWork />
          <Navigation />
        </div>
      </header>
    </div>
  )
}

export default header
