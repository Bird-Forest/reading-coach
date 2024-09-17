"use client";

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import styles from "./Calendar.module.css";

export default function GetMonth({ getValue, month }) {
  const getDaysArr = (arr) => {
    const daysArr = [];
    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      daysArr.push(item);
    }
    return daysArr;
  };

  const days = getDaysArr(month);

  return (
    <div className={styles.oneMonth}>
      <ul className={styles.wrapDays}>
        {days.map((item) => (
          <li key={uuidv4()}>
            <button
              type="button"
              value={item}
              onClick={getValue}
              className={styles.day}
            >
              {format(new Date(item), "d")}
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.btnChoose}>
        Обрати
      </button>
    </div>
  );
}
