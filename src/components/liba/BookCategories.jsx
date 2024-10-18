"use client";

import React, { useState } from "react";
import ListBooksEnd from "./ListBooksEnd";
import ListBooksInit from "./ListBooksInit";
import ListBooksStart from "./ListBooksStart";
import styles from "@/components/liba/Library.module.css";
import ButtonLink from "../button/ButtonLink";
import { useTranslations } from "next-intl";
import StartSteps from "../modal/StartSteps";

export default function BookCategories({ id, arrStart, arrInit, arrEnd }) {
  const t = useTranslations("library");

  const booksEnd = Array.isArray(arrEnd) && arrEnd.length > 0;
  const booksInit = Array.isArray(arrInit) && arrInit.length > 0;
  const booksStart = Array.isArray(arrStart) && arrStart.length > 0;
  const isBtnTrain = arrStart.length > 0 && arrInit.length === 0;
  const emptyPage = !booksEnd && !booksInit && !booksStart;

  return (
    <div className={styles.wrapAllList}>
      {booksEnd ? <ListBooksEnd userId={id} arrEnd={arrEnd} /> : []}
      {booksInit ? <ListBooksInit userId={id} arrInit={arrInit} /> : []}
      {booksStart ? <ListBooksStart userId={id} arrStart={arrStart} /> : []}
      {emptyPage && <StartSteps />}
      {isBtnTrain && (
        <ButtonLink path={`/user/training`}>{t("library_btn")}</ButtonLink>
      )}
    </div>
  );
}
