"use client";

import React from "react";
import styles from "./Navigate.module.css";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigateTrain({}) {
  const pathname = usePathname();
  return (
    <div className={styles.wrapNavigate}>
      {pathname === "/training" && (
        <Link
          href="/training/trainlist"
          className={styles.wrapIcon}
          style={{ justifyContent: "flex-end" }}
        >
          <HiArrowLongRight className={styles.iconNav} />
        </Link>
      )}
      {pathname === "/training/trainlist" && (
        <Link
          href="/train"
          className={styles.wrapIcon}
          style={{ justifyContent: "flex-start" }}
        >
          <HiArrowLongLeft className={styles.iconNav} />
        </Link>
      )}
    </div>
  );
}
