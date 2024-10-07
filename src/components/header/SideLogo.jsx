"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Header.module.css";
import { abril } from "@/app/fonts";

export default function SideLogo() {
  return (
    <SidebarItem pathname="/">
      <h4 className={`${abril.className} ${styles.logo}`}>BR</h4>
    </SidebarItem>
  );
}
