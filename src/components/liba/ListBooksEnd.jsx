"use client";

import React, { useEffect, useState } from "react";
import styles from "./Library.module.css";
import BookItem from "@/components/book/BookItem";
import { IoStarOutline, IoStar } from "react-icons/io5";
import { createPortal } from "react-dom";
import OverlayModal from "@/components/modal/OverlayModal";
import ResumeModal from "@/components/modal/ResumeModal";
import TableHeaderEnd from "../table/TableHeaderEnd";
import { updateBook } from "@/services/books";
import useSWR from "swr";
import { bookCategory } from "@/constants/bookCategory";
import SpinnerO from "../helper/SpinnerO";
import { useTranslations } from "next-intl";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListBooksEnd({ userId, arrEnd }) {
  const t = useTranslations("library");
  const [books, setBooks] = useState(arrEnd);

  const category = bookCategory.end;
  const shouldFetch = !!userId;

  const { data, isLoading } = useSWR(
    shouldFetch ? `/api/books?category=${category}&id=${userId}` : null,
    fetcher,
    { refreshInterval: 3600 }
  );
  useEffect(() => {
    if (!data) return;
    setBooks(data);
  }, [data]);

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const openModal = (item) => {
    setCurrentItem(item);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setCurrentItem(null);
  };
  const getResume = async (book) => {
    const id = book._id;
    const res = await updateBook(id, book);
    closeModal();
  };

  return (
    <>
      {isLoading ? (
        <SpinnerO />
      ) : (
        <div className={styles.wrapListAny}>
          <h5 className={styles.titleList}>{t("title_end")}</h5>
          <div className={styles.wrapTabList}>
            <TableHeaderEnd />
            <ul className={styles.listStart}>
              {books.map((item) => (
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
                      <p className={styles.keyBook}>{t("rating")}</p>
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
                        onClick={() => openModal(item)}
                        className={styles.btnResume}
                      >
                        {t("resume_btn")}
                      </button>
                      {showModal &&
                        currentItem &&
                        currentItem._id === item._id &&
                        createPortal(
                          <OverlayModal
                            item={currentItem}
                            content={
                              <ResumeModal
                                item={currentItem}
                                closeModal={closeModal}
                                getResume={getResume}
                              />
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
      )}
    </>
  );
}
