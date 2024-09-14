"use client";

import React from "react";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <div className={styles.header}>
      <Sidebar />
    </div>
  );
}
