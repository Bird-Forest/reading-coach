"use client";

import React, { useState } from "react";
import styles from "./Modal.module.css";
import { IoStarOutline, IoStar } from "react-icons/io5";

export default function ResumeModal({ item, closeModal, getResume }) {
  const [checkboxStates, setCheckboxStates] = useState(
    item.rating ?? [false, false, false, false, false]
  );
  const [message, setMessage] = useState(item.resume || "");
  const handleResume = () => {
    const book = {
      ...item,
      rating: checkboxStates,
      resume: message,
    };
    getResume(book);
  };

  return (
    <div className={styles.wrapResume} onClick={(e) => e.stopPropagation()}>
      <h4 className={styles.titleResume}>Обрати рейтинг книги</h4>
      <div className={styles.wrapEorm}>
        <ul className={styles.wrapStars}>
          {item.rating?.map((el, i) => (
            <li key={i} className={styles.wrapStar}>
              <input
                name="rating"
                type="checkbox"
                onChange={(e) => {
                  const newCheckboxStates = [...checkboxStates];
                  newCheckboxStates[i] = e.target.checked;
                  setCheckboxStates(newCheckboxStates);
                }}
                checked={checkboxStates[i]}
                className={styles.wrapInput}
              />
              {checkboxStates[i] ? (
                <IoStar className={styles.iconStar} />
              ) : (
                <IoStarOutline className={styles.iconStar} />
              )}
            </li>
          ))}
        </ul>
        <label className={styles.labelResume}>
          Резюме
          <textarea
            name="resume"
            placeholder="..."
            autoFocus
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarResume}
          />
        </label>
        <div className={styles.wrapBtnResume}>
          <button
            type="button"
            onClick={closeModal}
            className={`${styles.btnResume} ${styles.btnWhite}`}
          >
            Назад
          </button>
          <button
            type="button"
            onClick={handleResume}
            className={`${styles.btnResume} ${styles.btnOrang}`}
          >
            Зберегти
          </button>
        </div>
      </div>
    </div>
  );
}
