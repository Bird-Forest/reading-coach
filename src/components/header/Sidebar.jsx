"use client";

import React from "react";

import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { abril } from "@/app/fonts";
import { GrLanguage } from "react-icons/gr";
import UserNavigate from "./UserNavigate";

export default function Sidebar({}) {
  const pathname = usePathname();
  // console.log(pathname);
  const segments = pathname.split("/");
  // console.log(segments);
  const page = segments[1];
  // console.log(page);

  return (
    <div className={styles.wrapSidebar}>
      <SidebarItem current={page === "/"} pathname="/">
        <h4 className={`${abril.className} ${styles.logo}`}>BR</h4>
      </SidebarItem>
      <UserNavigate />
      <div className={styles.wrapSideItem}>
        <button type="button">
          <GrLanguage className={styles.iconSide} />
        </button>
      </div>
    </div>
  );
}
