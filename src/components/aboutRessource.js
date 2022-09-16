import React from "react"
import styled from "@emotion/styled"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { AiOutlineLinkedin } from "@react-icons/all-files/ai/AiOutlineLinkedin"
import { FaLaptopCode } from "@react-icons/all-files/fa/FaLaptopCode"
import { AiOutlineMail } from "@react-icons/all-files/ai/AiOutlineMail"
import { AiOutlinePhone } from "@react-icons/all-files/ai/AiOutlinePhone"
import { FaRegAddressCard } from "@react-icons/all-files/fa/FaRegAddressCard"

const Ressources = () => {
  const LiRessources = styled.div`
    width: 95%;
    margin-left: 5%;
    padding: 1rem 2rem;
    margin: 0 2rem;
    background-color: #000;
    border: 1px solid #000;
    border-radius: 12px;

    @media only screen and (min-width: 758px) {
      width: 27%;
      margin-left: 4%;
    }

    article {
      margin: 4rem 1rem;
      display: flex;
      align-items: center;
      padding-left: 4rem;
    }
  `

  const Spany = styled.span`
    color: #ff9c45;
    font-weight: 600;
    font-size: 30px;
    letter-spacing: 0.64px;
    margin-left: 12px;
    padding-top: -20px;
  `

  return (
    <LiRessources>
      <article>
        <FaGithub color="#ff9c45" size="40px" />
        <Spany>Dépot Github</Spany>
      </article>
      <article>
        <AiOutlineLinkedin color="#ff9c45" size="40px" />
        <Spany>LinKedin</Spany>
      </article>
      <article>
        <FaLaptopCode color="#ff9c45" size="40px" />
        <Spany>Portfolio</Spany>
      </article>
      <article>
        <AiOutlineMail color="#ff9c45" size="40px" />
        <Spany>dfarkas960@gmail.com</Spany>
      </article>
      <article>
        <AiOutlinePhone color="#ff9c45" size="40px" />
        <Spany>Mobile: +33 760906971</Spany>
      </article>
      <article>
        <FaRegAddressCard color="#ff9c45" size="40px" />
        <Spany>CV Pdf</Spany>
      </article>
    </LiRessources>
  )
}

export default Ressources
