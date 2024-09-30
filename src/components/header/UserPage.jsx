"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { MdMenuBook } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

export default function UserPage() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = segments[2];
  const page = segments[3];
  return (
    <div className={styles.wrapPages}>
      <SidebarItem
        current={page === "training"}
        pathname={`/users/${id}/training`}
      >
        <MdMenuBook className={styles.iconSide} />
      </SidebarItem>
      <SidebarItem
        current={page === "library"}
        pathname={`/users/${id}/library`}
      >
        <VscHome className={styles.iconSide} />
      </SidebarItem>
    </div>
  );
}
