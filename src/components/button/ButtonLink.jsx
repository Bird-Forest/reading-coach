import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

// export interface ButtonLinkProps {
//   path: string;
//   children: React.ReactNode;
// }

export default function ButtonLink({ path, children }) {
  return (
    // <div className={styles.wrapBtnTrain}>
    <Link href={path} className={styles.btnLink}>
      {children}
    </Link>
    // </div>
  );
}
