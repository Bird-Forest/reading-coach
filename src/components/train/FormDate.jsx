"use client";

import React, { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./FormTrain.module.css";
import GetPeriod from "../calendar/GetPeriod";
import { formatISO, isBefore, format, isPast, endOfYesterday } from "date-fns";

export default function FormDate({ trainingStart, trainingEnd }) {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const getStartDay = (event) => {
    setStartDay(event.target.value);
    let value = formatISO(new Date(event.target.value));
    trainingStart(value);
  };

  const getEndDay = (event) => {
    setEndDay(event.target.value);
    let value = formatISO(new Date(event.target.value));
    trainingEnd(value);
  };

  const yesterday = endOfYesterday();
  const before = isBefore(new Date(startDay), new Date(yesterday));
  const past = isPast(new Date(endDay));

  let valueStart = startDay && format(new Date(startDay), "dd-MM-yyyy");
  let valueEnd = endDay && format(new Date(endDay), "dd-MM-yyyy");

  return (
    <div className={styles.formDate}>
      <div className={styles.wrapDate}>
        {before && <p className={styles.wrapError}>Помилкова дата</p>}
        <label className={styles.labelDate}>
          <input
            type="text"
            defaultValue={valueStart}
            readOnly={valueStart}
            className={styles.inputDate}
            placeholder="Початок"
          />
          <div className={styles.wrapIconCldr}>
            <RxCalendar className={styles.iconCldr} />
          </div>
          <button
            type="button"
            onClick={() => setOpenStart(!openStart)}
            className={styles.btnOpen}
          >
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
        <div
          style={{
            top: "42px",
            position: "absolute",
            zIndex: "1",
            display: !openStart ? "none" : "block",
          }}
        >
          <GetPeriod getValue={getStartDay} />
        </div>
      </div>

      <div className={styles.wrapDate}>
        {past && <p className={styles.wrapError}>Помилкова дата</p>}
        <label className={styles.labelDate}>
          <input
            type="text"
            defaultValue={valueEnd}
            readOnly={valueEnd}
            className={styles.inputDate}
            placeholder="Завершення"
          />
          <div className={styles.wrapIconCldr}>
            <RxCalendar className={styles.iconCldr} />
          </div>
          <button
            type="button"
            onClick={() => setOpenEnd(!openEnd)}
            className={styles.btnOpen}
          >
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
        <div
          style={{
            top: "42px",
            position: "absolute",
            zIndex: "1",
            display: !openEnd ? "none" : "block",
          }}
        >
          <GetPeriod getValue={getEndDay} />
        </div>
      </div>
    </div>
  );
}
