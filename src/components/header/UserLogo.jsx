"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Header.module.css";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function UserLogo({ page, id }) {
  const { username } = useLocalStorage("authToken");
  const word = username.slice(0, 1);
  const firstLetter = word.toUpperCase();
  return (
    <div className={styles.wrapLinkName}>
      <SidebarItem current={!page} pathname={`/users/${id}`}>
        <p className={styles.letterName}>{firstLetter}</p>
      </SidebarItem>
    </div>
  );
}
