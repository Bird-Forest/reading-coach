"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./FormTrain.module.css";
import { v4 as uuidv4 } from "uuid";
import SpinnerO from "../helper/SpinnerO";

export default function FormSelect({ arrStart, choosedBook }) {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState({});

  console.log(option);

  const Arr = Array.isArray(arrStart) && arrStart.length > 0;

  return (
    <div className={styles.formSelect}>
      <div className={styles.wrapSelet}>
        <label className={styles.labelSelect}>
          <input
            type="text"
            defaultValue={option.title}
            readOnly={option.title}
            className={styles.inputSelect}
            placeholder="Обрати книги з бібліотеки"
          />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={styles.btnOpen}
          >
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
      </div>
      <div
        style={{
          top: "44px",
          position: "absolute",
          zIndex: "1",
          display: !open ? "none" : "block",
        }}
      >
        <ul className={styles.wrapOptions}>
          {Arr ? (
            arrStart.map(
              (item) => (
                (item.category = "init"),
                (
                  <li
                    key={uuidv4()}
                    onClick={() => setOption(item)}
                    className={styles.options}
                  >
                    {item.title}
                  </li>
                )
              )
            )
          ) : (
            <SpinnerO />
          )}
        </ul>
      </div>
      <div className={styles.wrapBtnAdd}>
        <button
          type="button"
          onClick={() => choosedBook(option)}
          className={styles.btnCreate}
        >
          Додати
        </button>
      </div>
    </div>
  );
}
