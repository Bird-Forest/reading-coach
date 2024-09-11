"use client";

import React from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./Button.module.css";
import { roboto } from "@/app/fonts";
import { signIn } from "@/configs/auth";

export default function ButtonGoogl() {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl") || "/liba";
  // console.log("HELLO");

  // const handleSubmit = async (event: FormEvent) => {
  //   event.preventDefault();
  //   await signIn("google");
  //   router.push("/liba");
  // };

  return (
    <div className={styles.wrapBtnGoogl}>
      <div className={styles.wrapIconGoog}>
        <FcGoogle className={styles.iconGoogl} />
      </div>

      <form
        // onSubmit={handleSubmit}
        action={async () => {
          await signIn("google");
        }}
      >
        {/* <button
          type="submit"
          className={`${roboto.className} ${styles.googlBtn}`}
        >
          Google
        </button> */}
        <button
          // onClick={() => signIn("google")}
          type="submit"
          className={`${roboto.className} ${styles.googlBtn}`}
        >
          Google
        </button>
      </form>
    </div>
  );
}

// "use client";

// import React, { FormEvent } from "react";
// import { FcGoogle } from "react-icons/fc";
// import styles from "./Button.module.css";
// import { roboto } from "@/app/fonts";
// import { signIn } from "@/auth";
// import { useRouter, NextRouter } from "next/navigation";

// export default function ButtonGoogl() {
//   const router: NextRouter = useRouter();

//   const handleSubmit = async (event: FormEvent) => {
//     event.preventDefault();
//     await signIn("google", router.push("/liba"));
//   };

//   return (
//     <div className={styles.wrapBtnGoogl}>
//       <FcGoogle className={styles.iconGoogl} />
//       <form onSubmit={handleSubmit}>
//         <button
//           type="submit"
//           className={`${roboto.className} ${styles.googlBtn}`}
//         >
//           Google
//         </button>
//       </form>
//     </div>
//   );
// }
