"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import { VscHome } from "react-icons/vsc";
import { MdMenuBook } from "react-icons/md";
import ButtonOut from "../button/ButtonOut";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function UserNavigate() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const id = segments[2];
  const page = segments[3];
  // const { username } = useLocalStorage("authToken");
  // console.log("USER", username);
  return (
    <div className={styles.wrapSideList}>
      <div className={styles.wrapLinkName}>
        <SidebarItem current={page === " "} pathname={`/users/${id}`}>
          <p className={styles.logo}>M</p>
        </SidebarItem>
      </div>
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
        <ButtonOut />
      </div>
    </div>
  );
}
