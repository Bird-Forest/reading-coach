// "use client";

// import React from "react";
// import ButtonOut from "../button/ButtonOut";
// import UserLogo from "./UserLogo";
// import styles from "./Header.module.css";
// import UserPage from "./UserPage";
// import { usePathname } from "next/navigation";

// export default function UserNavMobile() {
//   const pathname = usePathname();
//   const segments = pathname.split("/");
//   const id = segments[2];
//   const page = segments[3];
//   return (
//     <div className={styles.wrapSideMobile}>
//       <UserPage page={page} id={id} />
//       <div className={styles.line} />
//       <UserLogo page={page} id={id} />
//       <ButtonOut />
//     </div>
//   );
// }
