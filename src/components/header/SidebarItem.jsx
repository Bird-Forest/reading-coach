import Link from "next/link";
import React from "react";
import styles from "./Header.module.css";

// export interface SidebarItemProps {
//   current: boolean;
//   pathname: string;
//   children: React.ReactNode;
// }

export default function SidebarItem({ current, pathname, children }) {
  return (
    <li className={styles.wrapSideItem}>
      <Link
        href={pathname}
        className={current ? styles.wrapIconActiv : styles.wrapIcon}
      >
        {children}
      </Link>
    </li>
  );
}
