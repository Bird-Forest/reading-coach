"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./Button.module.css";
import { roboto } from "@/app/fonts";
import { signIn } from "next-auth/react";

export default function ButtonGoogl() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await signIn("google", { callbackUrl: "/user/library" });
  };

  return (
    <div className={styles.wrapBtnGoogl}>
      <div className={styles.wrapIconGoog}>
        <FcGoogle className={styles.iconGoogl} />
      </div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          className={`${roboto.className} ${styles.googlBtn}`}
        >
          Google
        </button>
      </form>
    </div>
  );
}
