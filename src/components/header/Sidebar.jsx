"use client";

import React from "react";
// import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import UserNavDesk from "./UserNavDesk";
import UserNavMobile from "./UserNavMobile";

export default function Sidebar({}) {
  // const pathname = usePathname();
  // // console.log(pathname);
  // const segments = pathname.split("/");
  // // console.log(segments);
  // const page = segments[1];
  // // console.log(page);

  return (
    <div className={styles.wrapSidebar}>
      <UserNavMobile />
      <UserNavDesk />
    </div>
  );
}
