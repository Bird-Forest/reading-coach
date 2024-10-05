"use client";

import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Sidebar from "./Sidebar";
import SideLogo from "./SideLogo";
import SideLng from "./SideLng";
import { getTime } from "date-fns";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [valid, setValid] = useState(false);

  useEffect(() => {
    if (!session) setValid(false);

    const today = getTime(new Date());
    const exp = session ? getTime(new Date(session.expires)) : 0;

    if (session !== null && exp > today) {
      setValid(true);
    }
  }, [session]);

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
