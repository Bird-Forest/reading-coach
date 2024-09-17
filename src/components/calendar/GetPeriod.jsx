"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import styles from "./Calendar.module.css";
import GetMonth from "./GetMonth";
import { datePeriod } from "@/constants/datePeriod";

export default function GetPeriod({ getValue }) {
  const [index, setIndex] = useState(1);
  const getMonthArr = (arr) => {
    const monthArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      monthArr.push(item);
    }
    return monthArr;
  };
  const months = getMonthArr(datePeriod);

  const onChangeValue = (value) => {
    setIndex((prevIndex) => prevIndex + value);
  };
  const total = months.length;
  const showMonth = months[index - 1];

  const monthName = format(new Date(showMonth[20]), "MMMM, y");
  return (
    <div className={styles.wrapMonth}>
      <div className={styles.month}>
        <button
          type="button"
          disabled={index === 1}
          onClick={() => onChangeValue(-1)}
          className={styles.btnMonth}
        >
          <IoMdArrowDropleft className={styles.iconMonth} />
        </button>
        <p>{monthName}</p>
        <button
          type="button"
          disabled={index === total}
          onClick={() => onChangeValue(+1)}
          className={styles.btnMonth}
        >
          <IoMdArrowDropright className={styles.iconMonth} />
        </button>
      </div>
      <GetMonth getValue={getValue} month={showMonth} />
    </div>
  );
}
