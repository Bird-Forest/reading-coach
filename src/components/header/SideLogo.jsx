"use client";

import { usePathname } from "next/navigation";
import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Header.module.css";
import { abril } from "@/app/fonts";

export default function SideLogo() {
  // const pathname = usePathname();
  // console.log(pathname);
  // const segments = pathname.split("/");
  // const page = segments[0];
  return (
    <SidebarItem pathname="/">
      <h4 className={`${abril.className} ${styles.logo}`}>BR</h4>
    </SidebarItem>
  );
}
