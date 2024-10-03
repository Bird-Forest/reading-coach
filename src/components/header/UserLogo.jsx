"use client";

import React from "react";
import SidebarItem from "./SidebarItem";
import styles from "./Header.module.css";
import useLocalStorage from "@/hooks/useLocalStorage";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { abril } from "@/app/fonts";

export default function UserLogo() {
  const { data: session } = useSession();

  // console.log(expires);
  const userName = session?.user.name;
  // console.log(userName);
  // const { username } = useLocalStorage("authToken");
  const word = userName.slice(0, 1);
  const firstLetter = word.toUpperCase();

  const pathname = usePathname();
  const segments = pathname.split("/");

  const page = segments[2];

  return (
    <div className={styles.wrapUser}>
      <SidebarItem current={!page} pathname={"/user"}>
        <p className={`${abril.className} ${styles.letterName}`}>
          {firstLetter}
        </p>
      </SidebarItem>
    </div>
  );
}
