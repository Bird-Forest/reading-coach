import React from "react";
import styles from "@/components/forma/Form.module.css";
import Information from "@/components/info/Information";
import { auth } from "@/configs/auth";
import FormaSignUp from "@/components/forma/FormaSignUp";
// import { SessionProps } from "@/types/session";

// export interface Session {
//   user?: IUser;
//   expires: string;
// }

export default async function RegistrPage() {
  // const session = await auth();
  // console.log("RegistrPage", session);
  return (
    <div className={styles.pageAuth}>
      <FormaSignUp />
      <div className={styles.wrapSignInfo}>
        <Information />
      </div>
    </div>
  );
}
