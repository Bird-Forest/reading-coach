import React from "react";
import styles from "@/components/liba/Library.module.css";
import BookForm from "@/components/liba/BookForm";
import BookCategories from "@/components/liba/BookCategories";
import { getBooksEnd, getBooksInit, getBooksStart } from "@/services/books";
import { revalidatePath } from "next/cache";
import LibraryMobile from "@/components/liba/LibraryMobile";
import { auth } from "@/configs/auth";

export default async function LibraryPage() {
  const session = await auth();
  if (!session.user) return null;

  const id = session.user.id;
  const booksStart = getBooksStart(id);
  const booksInit = getBooksInit(id);
  const booksEnd = getBooksEnd(id);
  const [arrStart, arrInit, arrEnd] = await Promise.all([
    booksStart,
    booksInit,
    booksEnd,
  ]);
  revalidatePath(`/user/library`, "page");

  return (
    <>
      <div className={styles.wrapLibMob}>
        <LibraryMobile
          id={id}
          arrStart={arrStart}
          arrInit={arrInit}
          arrEnd={arrEnd}
        />
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