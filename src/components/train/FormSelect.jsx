"use client";

import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./FormTrain.module.css";
import { v4 as uuidv4 } from "uuid";
import useSWR from "swr";
import { bookCategory } from "@/constants/bookCategory";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function FormSelect({ choosedBook }) {
  const t = useTranslations("training");
  const { data: session } = useSession();
  const userId = session?.user.id;
  const category = bookCategory.start;

  const { data } = useSWR(
    `/api/books?category=${category}&id=${userId}`,
    fetcher,
    { refreshInterval: 3600 }
  );

  const [open, setOpen] = useState(false);
  const [option, setOption] = useState({});
  const arrStart = data;

  const selectedBook = (item) => {
    const initBook = {
      ...item,
      category: bookCategory.init,
    };
    setOption(initBook);
  };

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
            placeholder={t("form_select")}
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
      <div className={!open ? styles.noneSelect : styles.blockSelect}>
        <ul className={styles.wrapOptions}>
          {Arr ? (
            arrStart.map((item) => (
              <li
                key={uuidv4()}
                onClick={() => selectedBook(item)}
                className={styles.options}
              >
                {item.title}
              </li>
            ))
          ) : (
            <p className={styles.options}>{t("select_empty")}</p>
          )}
        </ul>
      </div>
      <div className={styles.wrapBtnAdd}>
        <button
          type="button"
          onClick={() => choosedBook(option)}
          className={styles.btnCreate}
        >
          {t("form_btn")}
        </button>
      </div>
    </div>
  );
}
