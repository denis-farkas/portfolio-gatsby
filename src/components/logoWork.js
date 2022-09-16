import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const LogoWork = () => {
  return (
    <StaticImage
      src="../images/logo.png"
      alt="logo cloudefar"
      layout="fixed"
      width={205}
      height={76}
    />
  )
}

export default LogoWork
