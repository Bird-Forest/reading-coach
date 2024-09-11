"use client";

import React from "react";
import styles from "./Library.module.css";
import { bookCategory } from "@/constants/bookCategory";
// import { createBook } from "@/services/books";

export default function BookForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newBook = {
      title: formData.get("title"),
      author: formData.get("author"),
      year: formData.get("year"),
      pages: Number(formData.get("pages")),
      rating: [false, false, false, false, false],
      category: bookCategory.start,
    };
    console.log(newBook);
    // const notice = await createBook(newBook);
    // console.log(notice);
    event.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={styles.createForm}>
      <label htmlFor="title" className={styles.label}>
        Назва книги
        <input
          name="title"
          placeholder="..."
          required
          className={styles.input}
        />
      </label>
      <label htmlFor="author" className={styles.label}>
        Автор книги
        <input
          name="author"
          placeholder="..."
          required
          className={styles.input}
        />
      </label>
      <label htmlFor="year" className={styles.label}>
        Рік випуску
        <input
          name="year"
          placeholder="..."
          required
          className={styles.input}
        />
      </label>
      <label htmlFor="pages" className={styles.label}>
        Кількість сторінок
        <input
          name="pages"
          placeholder="..."
          required
          className={styles.input}
        />
      </label>
      <div className={styles.wrapBtnAdd}>
        <button type="submit" className={styles.btnCreate}>
          Додати
        </button>
      </div>
    </form>
  );
}
