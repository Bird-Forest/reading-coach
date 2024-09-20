import React from "react";
import styles from "@/components/liba/Library.module.css";
import BookForm from "@/components/liba/BookForm";
import NavigateLibrary from "@/components/info/NavigateLibrary";
import BookCategories from "@/components/liba/BookCategories";
import { getBooksEnd, getBooksInit, getBooksStart } from "@/services/books";
import { revalidatePath } from "next/cache";

export default async function LibraryPage({ params: { id } }) {
  const booksStart = getBooksStart(id);
  const booksInit = getBooksInit(id);
  const booksEnd = getBooksEnd(id);
  const [arrStart, arrInit, arrEnd] = await Promise.all([
    booksStart,
    booksInit,
    booksEnd,
  ]);
  revalidatePath(`/users//${id}/library`, "page");

  return (
    <>
      <div className={styles.wrapLibMob}>
        <NavigateLibrary />
        <BookForm />
      </div>
      <div className={styles.wrapLibDeck}>
        <BookForm />
        <BookCategories
          userId={id}
          arrStart={arrStart}
          arrInit={arrInit}
          arrEnd={arrEnd}
        />
      </div>
    </>
  );
}
