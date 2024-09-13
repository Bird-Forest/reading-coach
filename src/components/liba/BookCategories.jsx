"use cclient";

import React from "react";
import ListBooksEnd from "./ListBooksEnd";
import ListBooksInit from "./ListBooksInit";
import ListBooksStart from "./ListBooksStart";
import styles from "@/components/liba/Library.module.css";

export default function BookCategories() {
  return (
    <div className={styles.wrapAllList}>
      <ListBooksEnd />
      <ListBooksInit />
      <ListBooksStart />
    </div>
  );
}
