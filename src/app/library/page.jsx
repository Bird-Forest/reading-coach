import React from "react";
import styles from "@/components/liba/Library.module.css";
import BookForm from "@/components/liba/BookForm";
import ListBooksStart from "@/components/liba/ListBooksStart";
import ListBooksInit from "@/components/liba/ListBooksInit";
import ListBooksEnd from "@/components/liba/ListBooksEnd";
import NavigateLibrary from "@/components/info/NavigateLibrary";

// export interface PageProps {}

export default function LibraryPage() {
  return (
    <>
      <div className={styles.wrapLibMob}>
        <NavigateLibrary />
        <BookForm />
      </div>
      <div className={styles.wrapLibDeck}>
        <BookForm />
        <div className={styles.wrapAllList}>
          <ListBooksEnd />
          <ListBooksInit />
          <ListBooksStart />
        </div>
      </div>
    </>
  );
}
