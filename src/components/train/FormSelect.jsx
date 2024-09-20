"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./FormTrain.module.css";
import { v4 as uuidv4 } from "uuid";
import SpinnerO from "../helper/SpinnerO";
import useSWR from "swr";
import { usePathname } from "next/navigation";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FormSelect({ choosedBook }) {
  const path = usePathname();
  const segments = path.split("/");
  const userId = segments[2];

  const category = "start";
  const { data: arrStart, isLoading } = useSWR(
    `/api/books?category=${category}&id=${userId}`,
    fetcher
  );

  const [open, setOpen] = useState(false);
  const [option, setOption] = useState({});

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
          top: "62px",
          position: "absolute",
          zIndex: "1",
          display: !open ? "none" : "block",
        }}
      >
        <ul className={styles.wrapOptions}>
          {isLoading ? (
            <SpinnerO />
          ) : (
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
