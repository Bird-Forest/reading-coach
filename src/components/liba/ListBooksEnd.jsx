"use client";

import React, { useState } from "react";
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
import Loading from "../helper/Loading";
import { useSession } from "next-auth/react";
import SpinnerO from "../helper/SpinnerO";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ListBooksEnd() {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const category = bookCategory.end;

  const shouldFetch = !!id;
  const { data, isLoading } = useSWR(
    shouldFetch ? `/api/books?category=${category}&id=${userId}` : null,
    fetcher,
    { refreshInterval: 3600 }
  );
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
          <h5 className={styles.titleList}>Прочитано</h5>
          <div className={styles.wrapTabList}>
            <TableHeaderEnd />
            <ul className={styles.listStart}>
              {data.map((item) => (
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
                        onClick={() => openModal(item)}
                        className={styles.btnResume}
                      >
                        Резюме
                      </button>
                      {showModal &&
                        currentItem &&
                        currentItem._id === item._id &&
                        createPortal(
                          <OverlayModal
                            // closeModal={closeModal}
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
