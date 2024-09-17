"use client";

import React, { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./FormTrain.module.css";
import GetPeriod from "../calendar/GetPeriod";

export default function FormDate({ id }) {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const getStartDay = (event) => {
    setStartDay(event.target.value);
  };
  // console.log(startDay);
  const gatEndDay = (event) => {
    setEndDay(event.target.value);
  };
  // console.log(endDay);
  return (
    <div className={styles.formDate}>
      <div className={styles.wrapDate}>
        <label className={styles.labelDate}>
          <input
            type="text"
            defaultValue={startDay}
            readOnly={startDay}
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
        <label className={styles.labelDate}>
          <input
            type="text"
            defaultValue={endDay}
            readOnly={endDay}
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
          <GetPeriod getValue={gatEndDay} />
        </div>
      </div>
    </div>
  );
}
