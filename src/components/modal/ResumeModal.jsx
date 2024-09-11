"use client";

import React, { useState } from "react";
import styles from "./Modal.module.css";
import { IoStarOutline, IoStar } from "react-icons/io5";
// import { formAction } from "@/services/books";
// import { BookItemProps } from "@/types/book";

export default function ResumeModal({ item, closeModal }) {
  const [book, setBook] = useState(item);
  const [checkboxStates, setCheckboxStates] = useState(
    item.rating ?? [false, false, false, false, false]
  );
  // const { pending } = useFormStatus();

  const handleSubmit = (formData) => {
    const newItem = {
      ...book,
      rating: checkboxStates,
      resume: formData.get("resume"),
    };
    setBook(newItem);
  };
  // console.log(book);

  return (
    <div className={styles.wrapResume} onClick={(e) => e.stopPropagation()}>
      <h4 className={styles.titleResume}>Обрати рейтинг книги</h4>
      <form
        // action={handleSubmit}
        className={styles.wrapEorm}
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          handleSubmit(formData);
        }}
      >
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
            className={styles.textarResume}
          />
        </label>
        <div className={styles.wrapBtnResume}>
          <button
            type="button"
            onClick={closeModal}
            className={styles.btnResWhite}
          >
            Назад
          </button>
          <button type="submit" className={styles.btnResOrang}>
            Зберегти
          </button>
        </div>
      </form>
      {/* <div className={styles.wrapBtnResume}>
        <button type="button" className={styles.btnResWhite}>
          Назад
        </button>
        <form
          action={async () => {
            await formAction(book);
          }}
        >
          <button type="submit" className={styles.btnResOrang}>
            {pending ? "Loading..." : "Зберегти"}
          </button>
        </form>
      </div> */}
    </div>
  );
}
