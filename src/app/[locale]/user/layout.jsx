// import UserNavigate from "@/components/header/UserNavigate";
import React from "react";
import styles from "@/components/stat/Statistic.module.css";
import { unstable_setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function UserLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  return <div className={styles.statPage}>{children}</div>;
}
