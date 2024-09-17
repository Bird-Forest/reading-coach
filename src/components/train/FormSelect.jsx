"use client";

import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./FormTrain.module.css";
import { v4 as uuidv4 } from "uuid";
import SpinnerO from "../helper/SpinnerO";
import { useFormStatus } from "react-dom";

export default function FormSelect({ id, arrStart }) {
  // const [titles, setTitles] = useState([]);
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState({});
  const { pending } = useFormStatus();
  const title = option.title;
  console.log(title);
  console.log(option);

  // useEffect(() => {
  //   if (!arrStart) return;
  //   let titles = arrStart.reduce((acc, book) => {
  //     acc.push(book.title);
  //     return acc;
  //   }, []);
  //   setTitles(titles);
  // }, [arrStart]);
  // console.log(titles);
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
            arrStart.map((item) => (
              <li
                key={uuidv4()}
                onClick={() => setOption(item)}
                className={styles.options}
              >
                {item.title}
              </li>
            ))
          ) : (
            <SpinnerO />
          )}
        </ul>
      </div>
      <div className={styles.wrapBtnAdd}>
        {/* <form
          action={async () => {
            const message = await formAction(item, id);
            setOpen(false)

          }}
        > */}
        <button type="submit" className={styles.btnCreate}>
          {pending ? <SpinnerO /> : "Додати"}
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}
