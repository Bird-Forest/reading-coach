"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import SideLogo from "./SideLogo";
import SideLng from "./SideLng";
import { usePathname } from "@/i18n/routing";
import { useSession } from "next-auth/react";

export default function Header() {
  const [valid, setValid] = useState(false);
  const path = usePathname();
  // const session = useSession();
  // console.log(session);

  useEffect(() => {
    const segments = path.split("/");
    const page = segments[1];
    // console.log(page);
    if (page === "user") {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [path]);

  return (
    <div className={styles.header}>
      <SideLogo />
      {valid ? (
        <div className={styles.wrapUserNav}>
          <Sidebar />
        </div>
      ) : (
        <></>
      )}
      <SideLng />
    </div>
  );
}
