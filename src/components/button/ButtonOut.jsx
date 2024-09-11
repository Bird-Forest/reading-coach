"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./Button.module.css";

export default function ButtonOut() {
  const router = useRouter();
  return (
    <form
      action={async () => {
        await signOut();
        router.push("/");
      }}
    >
      <button onClick={() => signOut()} className={styles.btnOut}>
        Вихід
      </button>
    </form>
  );
}
