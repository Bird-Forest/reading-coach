"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import SideLogo from "./SideLogo";
import SideLng from "./SideLng";
import useLocalStorage from "@/hooks/useLocalStorage";
import { format, fromUnixTime, getTime, isFuture } from "date-fns";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  const segments = path.split("/");

  const id = segments[2];
  const { exp } = useLocalStorage("authToken");
  const today = getTime(new Date());

  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!id) return;

    if (id && exp > today) {
      setValid(true);
    }
  }, [exp, id, today]);

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
