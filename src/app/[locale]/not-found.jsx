"use client";

import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import styles from "@/components/helper/Util.module.css";
import { notFound } from "next/navigation";

export default function NotFound() {
  unstable_setRequestLocale(locale);
  const t = useTranslations("not_found");

  notFound();
  return (
    <div className={styles.bg1}>
      <div className={styles.bg2}>
        <div className={styles.wrapNotFound}>
          <h2 className={styles.titleNotFound}>404</h2>
          <p className={styles.textNotFound}>{t("text")}</p>
          <Link href="/" className={styles.linkNotFound}>
            {t("link")}
          </Link>
        </div>
      </div>
    </div>
  );
}
