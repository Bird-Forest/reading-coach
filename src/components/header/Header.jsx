import React from "react";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import SideLogo from "./SideLogo";
import SideLng from "./SideLng";

export default function Header() {
  return (
    <div className={styles.header}>
      <SideLogo />
      <Sidebar />
      <SideLng />
    </div>
  );
}
