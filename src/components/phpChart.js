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

const dataPHP = [
  {
    subject: "Php",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "MVC",
    A: 130,
    fullMark: 150,
  },
  {
    subject: "CodeIgniter",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "API rest",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "POO",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Symfony",
    A: 100,
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

export const RechartsPHP = () => {
  return (
    <ContainChart>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataPHP}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="PHP"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ContainChart>
  )
}

export default RechartsPHP
