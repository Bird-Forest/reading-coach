"use client";

import React from "react";
import styles from "./Header.module.css";
import UserPage from "./UserPage";
import UserLogo from "./UserLogo";
import ButtonOut from "../button/ButtonOut";
import { usePathname } from "@/i18n/routing";

export default function Sidebar({}) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[2];

  return (
    <div className={styles.wrapSidebar}>
      <div className={styles.user}>
        <UserLogo page={page} />
      </div>
      <div className={styles.pages}>
        <UserPage page={page} />
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
