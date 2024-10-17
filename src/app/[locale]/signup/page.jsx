import React from "react";
import styles from "@/components/forma/Form.module.css";
import Information from "@/components/info/Information";
import FormaSignUp from "@/components/forma/FormaSignUp";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function RegistrPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <div className={styles.pageAuth}>
      <FormaSignUp />
      <div className={styles.wrapSignInfo}>
        <Information />
      </div>
    </div>
  );
}
