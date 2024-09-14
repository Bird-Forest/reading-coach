import React from "react";
import styles from "@/components/liba/Library.module.css";
import BookForm from "@/components/liba/BookForm";
import NavigateLibrary from "@/components/info/NavigateLibrary";
import BookCategories from "@/components/liba/BookCategories";
import { getBooksEnd, getBooksInit, getBooksStart } from "@/services/books";

export default async function LibraryPage({ params: { id } }) {
  // console.log(id);

  const booksStart = getBooksStart(id);
  const booksInit = getBooksInit(id);
  const booksEnd = getBooksEnd(id);
  const [arrStart, arrInit, arrEnd] = await Promise.all([
    booksStart,
    booksInit,
    booksEnd,
  ]);

  // console.log(arrStart);
  return (
    <>
      <div className={styles.wrapLibMob}>
        <NavigateLibrary />
        <BookForm />
      </div>
      <div className={styles.wrapLibDeck}>
        <BookForm />
        <BookCategories
          id={id}
          arrStart={arrStart}
          arrInit={arrInit}
          arrEnd={arrEnd}
        />
      </div>
    </>
  );
}
