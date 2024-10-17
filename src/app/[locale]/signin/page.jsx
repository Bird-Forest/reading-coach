import React from "react";
import styles from "@/components/forma/Form.module.css";
import Quotation from "@/components/forma/Quotation";
import FormaSignIn from "@/components/forma/FormaSignIn";
import { unstable_setRequestLocale } from "next-intl/server";

export default function LoginPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <div className={styles.pageLogin}>
      <FormaSignIn />
      <Quotation />
    </div>
  );
}
