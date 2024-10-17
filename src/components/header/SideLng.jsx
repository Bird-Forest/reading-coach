"use client";

import React from "react";
import styles from "./Header.module.css";
import { useLocale } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";

export default function SideLng() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  // const switchLocale = () => {
  //   const newLocale = routing.locales.find((item) => item !== locale);
  //   router.replace(pathname, { locale: newLocale });
  // };
  const switchLocale = () => {
    const newLocale = locale === "uk" ? "en" : "uk"; // Пример переключения между двумя локалями
    const newPathname = `/${newLocale}${pathname.substring(locale.length + 1)}`;
    router.replace(newPathname);
  };

  return (
    <button type="button" onClick={switchLocale} className={styles.btnLng}>
      {locale}
    </button>
  );
}
