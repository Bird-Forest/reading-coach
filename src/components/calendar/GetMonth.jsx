"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { datePeriod } from "@/constants/datePeriod";
import { format, isToday } from "date-fns";
import findCurrentMonth from "@/constants/findCurrentMonth";
import styles from "./Calendar.module.css";
import { useFormatter } from "next-intl";

export default function GetMonth({ getValue }) {
  const id = findCurrentMonth(datePeriod);
  const [index, setIndex] = useState(id);

  const onChangeValue = (value) => {
    setIndex((prevIndex) => prevIndex + value);
  };

  const showMonth = datePeriod[index];
  const total = datePeriod.length;

  const formater = useFormatter();
  const dayMonth = showMonth[20];
  const dateTime = new Date(dayMonth);
  const currentMonth = formater.dateTime(dateTime, {
    year: "numeric",
    month: "long",
  });

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
        <p className={styles.textMonth}>{currentMonth}</p>
        <button
          type="button"
          disabled={index === total}
          onClick={() => onChangeValue(+1)}
          className={styles.btnMonth}
        >
          <IoMdArrowDropright className={styles.iconMonth} />
        </button>
      </div>
      <div className={styles.oneMonth}>
        <ul className={styles.wrapDays}>
          {showMonth.map((item) => (
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
    </div>
  );
}
