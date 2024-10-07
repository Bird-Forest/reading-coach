import React from "react";
import styles from "@/components/forma/Form.module.css";
import Information from "@/components/info/Information";
import FormaSignUp from "@/components/forma/FormaSignUp";

export default async function RegistrPage() {
  return (
    <div className={styles.pageAuth}>
      <FormaSignUp />
      <div className={styles.wrapSignInfo}>
        <Information />
      </div>
    </div>
  );
}
