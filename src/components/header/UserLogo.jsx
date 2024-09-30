"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Header.module.css";
import useLocalStorage from "@/hooks/useLocalStorage";
import { usePathname } from "next/navigation";

export default function UserLogo() {
  const { username } = useLocalStorage("authToken");
  const word = username.slice(0, 1);
  const firstLetter = word.toUpperCase();

  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = segments[2];
  const page = segments[3];

  return (
    <div className={styles.wrapUser}>
      <SidebarItem current={!page} pathname={`/users/${id}`}>
        <p className={styles.letterName}>{firstLetter}</p>
      </SidebarItem>
    </div>
  );
}
