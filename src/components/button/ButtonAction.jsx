"use client";

import React from "react";
import styles from "./Button.module.css";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import Spinner from "../helper/Spinner";
import { useSession } from "next-auth/react";

export default function ButtonAction({ formAction, item, children }) {
  const { pending } = useFormStatus();
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user.id;

  return (
    <div className={styles.wrapBtnAction}>
      <form
        action={async () => {
          const res = await formAction(item, userId);
          router.push(`/user`);
        }}
      >
        <button button="button" className={styles.btnAction}>
          {pending ? <Spinner /> : children}
        </button>
      </form>
    </div>
  );
}
