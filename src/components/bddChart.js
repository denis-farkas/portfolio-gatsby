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

const dataBdd = [
  {
    subject: "SQL PDO",
    A: 140,
    fullMark: 150,
  },
  {
    subject: "MCD MLD",
    A: 130,
    fullMark: 150,
  },
  {
    subject: "Node Express",
    A: 110,
    fullMark: 150,
  },
  {
    subject: "MongoDB",
    A: 100,
    fullMark: 150,
  },
  {
    subject: "DatoCMS",
    A: 110,
    fullMark: 150,
  },
  {
    subject: "Firebase",
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

export const RechartsBdd = () => {
  return (
    <ContainChart>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataBdd}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="Base de données"
            dataKey="A"
            stroke="#81d972"
            fill="#81d972"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ContainChart>
  )
}

export default RechartsBdd
