// import UserNavigate from "@/components/header/UserNavigate";
import React from "react";
import styles from "@/components/liba/Library.module.css";

export default function UserLayout({ children }) {
  return <div className={styles.libPage}>{children}</div>;
}
