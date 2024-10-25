"use client";

import styles from "./Chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "./data";
import { useTranslations } from "next-intl";
import React from "react";

const renderColorfulLegendText = (value, entry) => {
  const { color } = entry;
  return <span style={{ color }}>{value}</span>;
};

export default function LineGraph() {
  const t = useTranslations("chart");
  return (
    <ResponsiveContainer
      width="90%"
      height={240}
      // style={{ position: "absolute", top: "-174px" }}
      className={styles.wrapGraf}
    >
      <svg width="0" height="0">
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="1"
              floodColor="rgba(0, 0, 0, 0.25)"
            />
          </filter>
        </defs>
      </svg>
      <LineChart data={data}>
        <CartesianGrid />
        <Legend
          align="center"
          iconSize={10}
          iconType="circle"
          formatter={renderColorfulLegendText}
        />
        <XAxis
          dataKey="date"
          hide={true}
          orientation="bottom"
          interval={0}
          stroke="rgb(177, 181, 194)"
        />
        <YAxis
          hide={true}
          interval={9}
          orientation="left"
          tickLine={true}
          stroke="rgb(177, 181, 194)"
        />
        <Tooltip
          contentStyle={{
            boxShadow: "0px 2px 3px 0px rgba(9, 30, 63, 0.1)",
            backgroundColor: " rgb(245, 247, 250)",
            border: "none",
            fontSize: "14px",
            fontWeight: "600",
          }}
        />
        <Line
          type="monotone"
          dataKey="plan"
          strokeWidth={2}
          stroke="rgb(9, 30, 63)"
          dot={{ fill: "rgb(9, 30, 63)", r: 4, filter: "url(#shadow)" }}
          activeDot={{ r: 6, fill: "rgb(9, 30, 63)", filter: "url(#shadow)" }}
          filter="url(#shadow)"
        />
        <Line
          type="monotone"
          dataKey="fact"
          strokeWidth={2}
          stroke="rgb(255, 107, 8)"
          dot={{ fill: "rgb(255, 107, 8)", r: 4, filter: "url(#shadow)" }}
          activeDot={{
            r: 6,
            fill: "rgb(255, 107, 8)",
            filter: "url(#shadow)",
          }}
          filter="url(#shadow)"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

// const renderColorfulLegendText = (value) => {
//   const color = value === "plan" ? "rgb(9, 30, 63)" : "rgb(255, 107, 8)";
//   return <span style={{ color }}>{value}</span>;
// };
// payload={[
//   {
//     value: `${t("plan")}`,
//     type: "circle",
//     color: "rgb(9, 30, 63)",
//   },
//   {
//     value: `${t("fact")}`,
//     type: "circle",
//     color: "rgb(255, 107, 8)",
//   },
// ]}
