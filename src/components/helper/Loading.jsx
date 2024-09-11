"use client";

import React from "react";
import styles from "./Util.module.css";
import ClockLoader from "react-spinners/ClockLoader";

export default function Loading() {
  return (
    <div className={styles.bg1}>
      <div className={styles.bg2}>
        <ClockLoader
          color="rgb(255, 107, 8)"
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          speedMultiplier={1}
        />
      </div>
    </div>
  );
}

// const Loading: React.FC<LoadingProps> = ({
//   visible = true,
//   height = "96",
//   width = "96",
//   color = "grey",
//   strokeWidth = "5",
//   animationDuration = "0.75",
//   ariaLabel = "rotating-lines-loading",
//   wrapperStyle = {},
//   wrapperClass = "",
// }) => {
//   return (
//     <div className={styles.bg1}>
//       <div className={styles.bg1}></div>
//     </div>
//   );
// };

// export default Loading;
