import React from "react";
import styles from "@/components/liba/Library.module.css";
import BookForm from "@/components/liba/BookForm";
import NavigateLibrary from "@/components/info/NavigateLibrary";
import BookCategories from "@/components/liba/BookCategories";
import { getBooksStart } from "@/services/books";

export default async function LibraryPage() {
  const booksStart = await getBooksStart();
  return (
    <>
      <div className={styles.wrapLibMob}>
        <NavigateLibrary />
        <BookForm />
      </div>
      <div className={styles.wrapLibDeck}>
        <BookForm />
        <BookCategories />
      </div>
    </>
  );
}
