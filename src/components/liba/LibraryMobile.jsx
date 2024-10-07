"use client";

import React, { useState } from "react";
import styles from "./LibraryMobile.module.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { BsPlusLg } from "react-icons/bs";
import BookForm from "./BookForm";
import BookCategories from "./BookCategories";

export default function LibraryMobile({ id, arrStart, arrInit, arrEnd }) {
  const [isForm, setIsForm] = useState(true);

  return (
    <div className={styles.wrapPage}>
      {isForm ? (
        <div className={styles.wrapForm}>
          <div className={styles.wrapBtnLeft}>
            <button
              type="button"
              onClick={() => setIsForm(false)}
              className={styles.btnLeft}
            >
              <HiArrowLongLeft className={styles.iconNav} />
            </button>
          </div>
          <BookForm />
        </div>
      ) : (
        <div className={styles.wrapList}>
          <BookCategories
            id={id}
            arrStart={arrStart}
            arrInit={arrInit}
            arrEnd={arrEnd}
          />
          <div className={styles.wrapBtnMore}>
            <button
              type="button"
              onClick={() => setIsForm(true)}
              className={styles.btnMore}
            >
              <BsPlusLg className={styles.iconMore} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
