"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { format, isToday, isThisMonth } from "date-fns";
import styles from "./Calendar.module.css";

export default function GetMonth({ getValue, month }) {
  // const getDaysArr = (arr) => {
  //   const daysArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     let item = arr[i];
  //     daysArr.push(item);
  //   }
  //   return daysArr;
  // };

  // const days = getDaysArr(month);
  // const result = isToday(new Date(item));
  // const result = isThisMonth(new Date(2014, 8, 15));

  return (
    <div className={styles.oneMonth}>
      <ul className={styles.wrapDays}>
        {month.map((item) => (
          <li key={uuidv4()} className={styles.wrapDay}>
            <button
              type="button"
              value={item}
              onClick={getValue}
              className={
                isToday(new Date(item))
                  ? styles.day + " " + styles.orang
                  : styles.day
              }
            >
              {format(new Date(item), "d")}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
