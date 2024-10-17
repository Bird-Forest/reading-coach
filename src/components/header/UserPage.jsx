"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { MdMenuBook } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import styles from "./Header.module.css";

export default function UserPage({ page }) {
  return (
    <div className={styles.wrapPages}>
      <SidebarItem current={page === "training"} href="/user/training">
        <MdMenuBook className={styles.iconSide} />
      </SidebarItem>
      <SidebarItem current={page === "library"} href="/user/library">
        <VscHome className={styles.iconSide} />
      </SidebarItem>
    </div>
  );
}
