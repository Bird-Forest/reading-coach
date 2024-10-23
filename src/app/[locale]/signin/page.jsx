import React from "react";
import styles from "@/components/forma/Form.module.css";
import Quotation from "@/components/forma/Quotation";
import FormaSignIn from "@/components/forma/FormaSignIn";
import { unstable_setRequestLocale } from "next-intl/server";
// import { auth } from "@/configs/auth";

export default function LoginPage({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  // const session = auth();
  // console.log("PAGE", session);
  return (
    <div className={styles.pageLogin}>
      <FormaSignIn />
      <Quotation />
    </div>
  );
}
