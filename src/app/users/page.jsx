import React from "react";
import styles from "@/components/forma/Form.module.css";
import Quotation from "@/components/forma/Quotation";
import FormaSignIn from "@/components/forma/FormaSignIn";

export default function LoginPage() {
  return (
    <div className={styles.pageLogin}>
      <FormaSignIn />
      <Quotation />
    </div>
  );
}
