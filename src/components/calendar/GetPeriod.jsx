"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import styles from "./Calendar.module.css";
import GetMonth from "./GetMonth";
import { datePeriod } from "@/constants/datePeriod";
import findCurrentMonth from "@/constants/findCurrentMonth";

export default function GetPeriod({ getValue }) {
  const id = findCurrentMonth(datePeriod);

  const [index, setIndex] = useState(id);

  // const getMonthArr = (arr) => {
  //   const monthArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let item = arr[i];
  //     monthArr.push(item);
  //   }
  //   return monthArr;
  // };
  // const months = getMonthArr(datePeriod);
  // // console.log(months);

  // function findCurrentMonth(datePeriod) {
  //   const currentDate = format(new Date(), "yyyy-MM-dd");
  //   // console.log(currentDate);

  //   for (const monthArray of datePeriod) {
  //     if (
  //       monthArray.some(
  //         (dateString) =>
  //           format(new Date(dateString), "yyyy-MM-dd") === currentDate
  //       )
  //     ) {
  //       // return monthArray;
  //       const idMonth = datePeriod.indexOf(monthArray);
  //       return idMonth;
  //     }
  //   }
  //   return null;
  // }

  // const currentMonth = findCurrentMonthArray(datePeriod);
  // const idMonth = datePeriod.indexOf(currentMonth);
  // console.log(idMonth);

  // console.log(currentMonthArray);

  const onChangeValue = (value) => {
    setIndex((prevIndex) => prevIndex + value);
  };
  const total = datePeriod.length;
  // console.log(total);
  // console.log(datePeriod.length);
  // const showMonth = months[index - 1];
  const showMonth = datePeriod[index];

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
        <p className={styles.textMonth}>{monthName}</p>
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
