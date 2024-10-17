"use client";

import React, { useState } from "react";
import ListBooksEnd from "./ListBooksEnd";
import ListBooksInit from "./ListBooksInit";
import ListBooksStart from "./ListBooksStart";
import styles from "@/components/liba/Library.module.css";
import ButtonLink from "../button/ButtonLink";
import { useTranslations } from "next-intl";
import StartSteps from "../modal/StartSteps";

export default function BookCategories({ id }) {
  const t = useTranslations("library");
  const [lengthStart, setLengthStart] = useState(0);
  const [lengthInit, setLengthInit] = useState(0);
  const [lengthEnd, setLengthEnd] = useState(0);

  const getLengthStart = (books) => {
    setLengthStart(books.length);
  };
  const getLengthInit = (books) => {
    setLengthInit(books.length);
  };
  const getLengthEnd = (books) => {
    setLengthEnd(books.length);
  };
  const isBtnTrain = lengthStart > 0 && lengthInit === 0;
  const emptyPage = lengthStart === 0 && lengthInit === 0 && lengthEnd === 0;

  // console.log(lengthStart);
  // console.log(lengthInit);

  return (
    <div className={styles.wrapAllList}>
      {lengthEnd > 0 ? (
        <ListBooksEnd userId={id} getLengthEnd={getLengthEnd} />
      ) : (
        []
      )}
      {lengthInit > 0 ? (
        <ListBooksInit userId={id} getLengthInit={getLengthInit} />
      ) : (
        []
      )}
      {lengthStart > 0 ? (
        <ListBooksStart userId={id} getLengthStart={getLengthStart} />
      ) : (
        []
      )}
      {emptyPage && <StartSteps />}
      {isBtnTrain && (
        <ButtonLink path={`/user/training`}>{t("library_btn")}</ButtonLink>
      )}
    </div>
  );
}

// const booksEnd = Array.isArray(arrEnd) && arrEnd.length > 0;
// const booksInit = Array.isArray(arrInit) && arrInit.length > 0;
// const booksStart = Array.isArray(arrStart) && arrStart.length > 0;

// const isBtnTrain = arrStart.length > 0 && arrInit.length === 0;

/* {booksEnd ? <ListBooksEnd userId={id} arrEnd={arrEnd} /> : []}
      {booksInit ? <ListBooksInit userId={id} arrInit={arrInit} /> : []}
      {booksStart ? <ListBooksStart userId={id} arrStart={arrStart} /> : []} */
