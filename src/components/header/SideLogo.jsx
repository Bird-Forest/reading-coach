"use client";

import { usePathname } from "next/navigation";
import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Header.module.css";
import { abril } from "@/app/fonts";

export default function SideLogo() {
  const pathname = usePathname();
  // console.log(pathname);
  const segments = pathname.split("/");
  // console.log(segments);
  const page = segments[1];
  return (
    <SidebarItem current={page === "/"} pathname="/">
      <h4 className={`${abril.className} ${styles.logo}`}>BR</h4>
    </SidebarItem>
  );
}
