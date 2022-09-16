import * as React from "react"
import Layout from "../components/layout"
import AboutMe from "../components/aboutMe"
import Ressources from "../components/aboutRessource"
import AboutList from "../components/aboutList"
import { css } from "@emotion/react"

const IndexPage = () => (
  <Layout>
    <div
      css={css`
        padding: 80px 0px;
        background-color: #fff5ec;
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <AboutMe />
      <AboutList />
      <Ressources />
    </div>
  </Layout>
)

export default IndexPage
