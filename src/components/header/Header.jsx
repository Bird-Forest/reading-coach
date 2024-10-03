"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import SideLogo from "./SideLogo";
import SideLng from "./SideLng";
import { getTime } from "date-fns";
// import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  // console.log(session);

  // const path = usePathname();
  // const segments = path.split("/");
  // const id = segments[2];

  // const { exp } = useLocalStorage("authToken");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!session) return;
    const today = getTime(new Date());
    const exp = getTime(new Date(session.expires));
    // console.log(today, exp);

    if (exp > today) {
      setValid(true);
    }
  }, [session]);

  // console.log(valid);

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
