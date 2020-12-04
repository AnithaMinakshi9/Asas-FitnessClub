import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("NOV 1", 2800),
  createData("NOV 2", 4603),
  createData("NOV 3", 3483),
  createData("NOV 4", 4293),
  createData("NOV 5", 3340),
  createData("NOV 6", 2199),
  createData("NOV 7", 3019),
  createData("NOV 8", 4343),
  createData("NOV 9", 3999),
  createData("NOV 10", 5204),
  createData("NOV 11", 2294),
  createData("NOV 12", 4048),
  createData("NOV 13", 2084),
  createData("NOV 14", 3478)
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Steps(per day)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
