// "use client";

import React from "react";
import styles from "./Main.module.css";
import Link from "next/link";
import Information from "./Information";
// import { useSession } from "next-auth/react";
// import { getTime } from "date-fns";
import { auth } from "@/configs/auth";
import { redirect } from "next/navigation";

export default async function MainInfo() {
  const session = await auth();
  // if (session !== null) redirect("/user");
  // const [valid, setValid] = useState(false);
  // const { data: session } = useSession();
  // console.log(session);
  // // console.log(expires);
  // useEffect(() => {
  //   if (!session) return;
  //   const today = getTime(new Date());
  //   const exp = getTime(new Date(session.expires));
  //   // console.log(today, exp);

  //   if (exp > today) {
  //     setValid(true);
  //   }
  // }, [session]);

  return (
    <div className={styles.wrapMainInfo}>
      <Information />
      <div className={styles.wrapBtns}>
        {session !== null ? (
          redirect("/user")
        ) : (
          <Link
            href="/signin"
            className={`${styles.btnLink} ${styles.btnLogin}`}
          >
            Увійти
          </Link>
        )}
        {/* <Link href="/signin" className={`${styles.btnLink} ${styles.btnLogin}`}>
          Увійти
        </Link> */}
        <Link href="/signup" className={`${styles.btnLink} ${styles.btnAuth}`}>
          Реєстрація
        </Link>
      </div>
    </div>
  );
}

//  <Link
//             href="/user/training"
//             className={`${styles.btnLink} ${styles.btnLogin}`}
//           >
//             Увійти
//           </Link>
