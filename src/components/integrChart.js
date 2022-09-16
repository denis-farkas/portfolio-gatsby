import React from "react"
import styled from "@emotion/styled"
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

const dataIt = [
  {
    subject: "HTML",
    A: 140,
    fullMark: 150,
  },
  {
    subject: "CSS/SCSS",
    A: 140,
    fullMark: 150,
  },
  {
    subject: "Bootstrap 5",
    A: 130,
    fullMark: 150,
  },
  {
    subject: "Wireframes",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Figma",
    A: 120,
    fullMark: 150,
  },

  {
    subject: "UI-UX",
    A: 110,
    fullMark: 150,
  },
]

const ContainChart = styled.div`
  width: 380px;
  height: 300px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  font-weight: 700;
  margin: 20px 20px;

  @media (max-width: 866px) {
    width: 80%;
    margin: 10px auto;
  }
`

export const RechartsIntg = () => {
  return (
    <ContainChart>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataIt}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Intégration"
            dataKey="A"
            stroke="#e2221a"
            fill="#e2221a"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ContainChart>
  )
}

export default RechartsIntg
