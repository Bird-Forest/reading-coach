"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Header.module.css";
import { useSession } from "next-auth/react";
import { abril } from "@/app/fonts";

export default function UserLogo({ page }) {
  const { data: session } = useSession();
  const userName = session ? session.user.name : " ";
  const word = session ? userName.slice(0, 1) : " ";
  const firstLetter = word.toUpperCase();

  return (
    <div className={styles.wrapUser}>
      <SidebarItem current={!page} href="/user">
        <p className={`${abril.className} ${styles.letterName}`}>
          {firstLetter}
        </p>
      </SidebarItem>
    </div>
  );
}
