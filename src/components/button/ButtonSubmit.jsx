"use client";

import React from "react";
import styles from "./Button.module.css";
// import { useFormStatus } from "react-dom";
// import Spinner from "../helper/Spinner";

// type BtnSubmit = {
//   // children: string;
//   children: React.ReactNode | string;
// };

export default function ButtonSubmit({ children }) {
  // const { pending } = useFormStatus();
  // console.log(pending);
  return (
    <div className={styles.wrapBtn}>
      <button type="submit" className={styles.submitBtn}>
        {children}
      </button>
    </div>
  );
}
