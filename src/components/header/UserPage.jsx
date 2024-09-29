"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { MdMenuBook } from "react-icons/md";
import { VscHome } from "react-icons/vsc";
import styles from "./Header.module.css";

export default function UserPage({ page, id }) {
  return (
    <div className={styles.wrapLinkPage}>
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
