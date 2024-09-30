"use client";

import React from "react";
import styles from "./Header.module.css";
import UserPage from "./UserPage";
import UserLogo from "./UserLogo";
import ButtonOut from "../button/ButtonOut";

export default function Sidebar({}) {
  return (
    <div className={styles.wrapSidebar}>
      <div className={styles.user}>
        <UserLogo />
      </div>
      <div className={styles.pages}>
        <UserPage />
      </div>
      <div className={styles.line}>
        <div className={styles.wrapLine} />
      </div>
      <div className={styles.button}>
        <ButtonOut />
      </div>
    </div>
  );
}
