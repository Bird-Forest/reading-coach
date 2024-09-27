"use client";

import React from "react";
import styles from "./Main.module.css";
import Link from "next/link";
import Information from "./Information";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function MainInfo() {
  const { id } = useLocalStorage("authToken");
  return (
    <div className={styles.wrapMainInfo}>
      <Information />
      <div className={styles.wrapBtns}>
        {id ? (
          <Link
            href={`/users/${id}/training`}
            className={`${styles.btnLink} ${styles.btnLogin}`}
          >
            Увійти
          </Link>
        ) : (
          <Link href="users" className={`${styles.btnLink} ${styles.btnLogin}`}>
            Увійти
          </Link>
        )}
        <Link href="/signup" className={`${styles.btnLink} ${styles.btnAuth}`}>
          Реєстрація
        </Link>
      </div>
    </div>
  );
}
