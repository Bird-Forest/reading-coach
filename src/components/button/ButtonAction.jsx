"use client";

import React, { useState } from "react";
import styles from "./Button.module.css";
import Spinner from "../helper/Spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "@/i18n/routing";
import { createCoach } from "@/services/coaches";

export default function ButtonAction({ item, children }) {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const userId = session?.user.id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPending(true);
    try {
      const res = await createCoach(item, userId);
      router.push(`/user`);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className={styles.wrapBtnAction}>
      <form
        onSubmit={handleSubmit}
        // action={async () => {
        //   const res = await createCoach(item, userId);
        //   console.log(res);
        //   router.push(`/user`);
        // }}
      >
        <button type="submit" className={styles.btnAction}>
          {pending ? <Spinner /> : children}
        </button>
      </form>
    </div>
  );
}
