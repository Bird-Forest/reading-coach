"use client";

import React from "react";
import { VscHome } from "react-icons/vsc";
import { MdMenuBook } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { abril } from "@/app/fonts";
import { GrLanguage } from "react-icons/gr";
import ButtonOut from "../button/ButtonOut";

// export interface SidebarProps {}

export default function Sidebar({}) {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const page = segments[1];

  // const handleExitClick = () => {
  //   router.push("/");
  // };

  return (
    <div className={styles.wrapSidebar}>
      <ul className={styles.wrapSideList}>
        <SidebarItem current={page === "/"} pathname="/">
          <h4 className={`${abril.className} ${styles.logo}`}>BR</h4>
        </SidebarItem>
        <SidebarItem current={page === "signin"} pathname="/signin">
          <h4 className={`${abril.className} ${styles.logo}`}>SI</h4>
        </SidebarItem>
        <SidebarItem current={page === "signup"} pathname="/signup">
          <h4 className={`${abril.className} ${styles.logo}`}>SU</h4>
        </SidebarItem>
        <SidebarItem current={page === "statistic"} pathname="/statistic">
          <p className={styles.logo}>M</p>
        </SidebarItem>
        <SidebarItem current={page === "library"} pathname="/library">
          <VscHome className={styles.iconSide} />
        </SidebarItem>
        <SidebarItem current={page === "training"} pathname="/training">
          <MdMenuBook className={styles.iconSide} />
        </SidebarItem>
        <li>
          <ButtonOut />
          {/* <button type="button" onClick={handleExitClick}>
            Вихід
          </button> */}
        </li>
        <li>
          <button type="button">
            <GrLanguage className={styles.iconSide} />
          </button>
        </li>
      </ul>
    </div>
  );
}
