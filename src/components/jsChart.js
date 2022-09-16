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

const dataJs = [
  {
    subject: "JavaScript",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Algorithme",
    A: 100,
    fullMark: 150,
  },
  {
    subject: "DOM",
    A: 130,
    fullMark: 150,
  },
  {
    subject: "React context",
    A: 130,
    fullMark: 150,
  },
  {
    subject: "Redux TK",
    A: 120,
    fullMark: 150,
  },
  {
    subject: "Gatsby",
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

export const RechartsJS = () => {
  return (
    <ContainChart>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataJs}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="JavaScript"
            dataKey="A"
            stroke="#efd81d"
            fill="#efd81d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </ContainChart>
  )
}

export default RechartsJS
