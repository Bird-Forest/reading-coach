// import UserNavigate from "@/components/header/UserNavigate";
import React from "react";
import styles from "@/components/stat/Statistic.module.css";

export default function UserLayout({ children }) {
  return <div className={styles.statPage}>{children}</div>;
}
