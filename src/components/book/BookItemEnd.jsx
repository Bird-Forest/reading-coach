"use client";

import React, { useState } from "react";
import { MdMenuBook } from "react-icons/md";
import styles from "./Book.module.css";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { createPortal } from "react-dom";
import OverlayModal from "../modal/OverlayModal";
import ResumeModal from "../modal/ResumeModal";

export default function BookItemEnd(item) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <li key={item._id} className={styles.wrapBookEnd}>
      <div className={styles.wrapTitleEnd}>
        <div className={styles.wrapIconBook}>
          <MdMenuBook
            className={
              item.category !== "init" ? styles.iconBook : styles.iconBookOrang
            }
          />
        </div>
        <h6 className={styles.titleBook}>{item.title}</h6>
      </div>
      <div className={styles.wrapTextEnd}>
        <p className={styles.keyBook}>Автор:</p>
        <p className={styles.textBook}>{item.author}</p>
      </div>
      <div className={styles.wrapTextEnd}>
        <p className={styles.keyBook}>Рік:</p>
        <p className={styles.textBook}>{item.year}</p>
      </div>
      <div className={styles.wrapTextEnd}>
        <p className={styles.keyBook}>Стор.:</p>
        <p className={styles.textBook}>{item.pages}</p>
      </div>
      <div className={styles.wrapTextEnd}>
        <p className={styles.keyBook}>Рейтинг:</p>
        <ul className={styles.wrapStars}>
          {item.rating?.map((el, i) => (
            <li key={i} className={styles.wrapStar}>
              {el ? (
                <IoStar className={styles.iconStar} />
              ) : (
                <IoStarOutline className={styles.iconStar} />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.wrapBtnResume}>
        <button type="button" onClick={openModal} className={styles.btnResume}>
          Резюме
        </button>
        {showModal &&
          createPortal(
            <OverlayModal
              closeModal={closeModal}
              content={<ResumeModal item={item} closeModal={closeModal} />}
            />,
            document.body
          )}
      </div>
    </li>
  );
}
