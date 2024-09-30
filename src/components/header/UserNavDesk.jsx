// "use client";

// import React from "react";
// import ButtonOut from "../button/ButtonOut";
// import { usePathname } from "next/navigation";
// import styles from "./Header.module.css";
// import UserLogo from "./UserLogo";
// import UserPage from "./UserPage";

// export default function UserNavDesk() {
//   const pathname = usePathname();
//   const segments = pathname.split("/");
//   const id = segments[2];
//   const page = segments[3];

//   return (
//     <div className={styles.wrapSideDesk}>
//       <div></div>
//       <UserLogo page={page} id={id} />
//       <UserPage page={page} id={id} />
//       <div className={styles.line} />
//       <ButtonOut />
//     </div>
//   );
// }
