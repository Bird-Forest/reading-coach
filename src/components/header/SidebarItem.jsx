"use client";

import React from "react";
import styles from "./Header.module.css";
import { Link } from "@/i18n/routing";

export default function SidebarItem({ current, href, children }) {
  return (
    <div className={styles.wrapSideItem}>
      <Link
        href={href}
        className={current ? styles.wrapIconActiv : styles.wrapIcon}
      >
        {children}
      </Link>
    </div>
  );
}
