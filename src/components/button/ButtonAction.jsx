"use client";

import React from "react";
import styles from "./Button.module.css";
import { useFormStatus } from "react-dom";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "../helper/Spinner";

export default function ButtonAction({ formAction, item, children }) {
  const { pending } = useFormStatus();
  const router = useRouter();
  const path = usePathname();
  const segments = path.split("/");
  const userId = segments[2];
  // console.log("BTN ACTION", userId);

  return (
    <div className={styles.wrapBtnAction}>
      <form
        action={async () => {
          const res = await formAction(item, userId);
          console.log(res);
          router.push(`/users/${userId}`);
        }}
      >
        <button button="button" className={styles.btnAction}>
          {pending ? <Spinner /> : children}
        </button>
      </form>
    </div>
  );
}
