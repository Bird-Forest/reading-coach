"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./Result.module.css";
import GetPeriod from "../calendar/GetPeriod";

export default function ResultForm() {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.wrapFormResult}>
      <div className={styles.wrapField}>
        <div className={styles.wrapDate}>
          <label className={styles.label}>
            <span className={styles.labelText}>Дата</span>
            <input
              type="text"
              defaultValue="17.10.2019"
              // defaultValue={valueStart}
              // readOnly={valueStart}
              className={styles.input}
              // placeholder="Початок"
            />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={styles.btnOpen}
            >
              <IoMdArrowDropdown className={styles.iconOpen} />
            </button>
          </label>
          <div
            style={{
              top: "60px",
              position: "absolute",
              zIndex: "1",
              display: !open ? "none" : "block",
            }}
          >
            <GetPeriod />
          </div>
        </div>
        <div className={styles.wrapPage}>
          <label className={styles.label}>
            <span className={styles.labelText}>Кількість сторінок</span>
            <input
              type="text"
              defaultValue="34"
              // readOnly={valueStart}
              className={styles.input}
              // placeholder="Початок"
            />
          </label>
        </div>
      </div>
      <button className={styles.btnResult}>Додати результат</button>
    </div>
  );
}
