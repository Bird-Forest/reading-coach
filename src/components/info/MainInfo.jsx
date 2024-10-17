"use client";

import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Information from "./Information";
import { getTime } from "date-fns";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function MainInfo({ session }) {
  const [valid, setValid] = useState(false);
  const t = useTranslations("home");

  useEffect(() => {
    if (session === null) return;
    const today = getTime(new Date());
    const exp = getTime(new Date(session.expires));
    if (exp > today) {
      setValid(true);
    }
  }, [session]);

  return (
    <div className={styles.wrapMainInfo}>
      <Information />
      <div className={styles.wrapBtns}>
        {valid ? (
          <Link href="/user" className={`${styles.btnLink} ${styles.btnLogin}`}>
            {t("btn_in")}
          </Link>
        ) : (
          <Link
            href="/signin"
            className={`${styles.btnLink} ${styles.btnLogin}`}
          >
            {t("btn_in")}
          </Link>
        )}
        <Link href="/signup" className={`${styles.btnLink} ${styles.btnAuth}`}>
          {t("btn_up")}
        </Link>
      </div>
    </div>
  );
}
