"use client";

import React, { useState } from "react";
import styles from "./Library.module.css";
import books from "@/books.json";
import BookItem from "@/components/book/BookItem";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { createPortal } from "react-dom";
import OverlayModal from "@/components/modal/OverlayModal";
import ResumeModal from "@/components/modal/ResumeModal";
import { bookCategory } from "@/constants/bookCategory";
import TableHeaderEnd from "../table/TableHeaderEnd";

export default function ListBooksEnd() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const arrEnd = books.filter((item) => item.category === bookCategory.end);

  return (
    <div className={styles.wrapListAny}>
      <h5 className={styles.titleList}>Прочитано</h5>
      <div className={styles.wrapTabList}>
        <div className={styles.wrapTabHead}>
          <div className={styles.wrapTabEnd}>
            <TableHeaderEnd />
          </div>
          <div className={styles.wrapTabRating}>
            <p className={styles.textRating}>Рейтинг книги</p>
          </div>
        </div>
        <ul className={styles.listStart}>
          {arrEnd.map((item) => (
            <li key={item._id} className={styles.wrapBookEnd}>
              <BookItem
                title={item.title}
                author={item.author}
                pages={item.pages}
                category={item.category}
                year={item.year}
              />
              <div className={styles.wrapItemEnd}>
                <div className={styles.wrapKeyStar}>
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
                  <button
                    type="button"
                    onClick={openModal}
                    className={styles.btnResume}
                  >
                    Резюме
                  </button>
                  {showModal &&
                    createPortal(
                      <OverlayModal
                        closeModal={closeModal}
                        content={
                          <ResumeModal item={item} closeModal={closeModal} />
                        }
                      />,
                      document.body
                    )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// <BookItemEnd
//   key={i}
//   // id={item._id}
//   title={item.title}
//   author={item.author}
//   pages={item.pages}
//   category={item.category}
//   year={item.year}
//   rating={item.rating}
//   resume={item.resume}
// />
