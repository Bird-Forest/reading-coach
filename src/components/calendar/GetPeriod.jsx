// "use client";

// import React, { useState } from "react";
// import { format } from "date-fns";
// import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
// import styles from "./Calendar.module.css";
// import GetMonth from "./GetMonth";
// import { datePeriod } from "@/constants/datePeriod";
// import findCurrentMonth from "@/constants/findCurrentMonth";

// export default function GetPeriod({ getValue }) {
//   const id = findCurrentMonth(datePeriod);
//   const [index, setIndex] = useState(id);

//   const onChangeValue = (value) => {
//     setIndex((prevIndex) => prevIndex + value);
//   };
//   // const total = datePeriod.length;

//   const showMonth = datePeriod[index + 1];

//   // const monthName = format(new Date(), "MMMM, yyyy");

//   return (
//     <div className={styles.wrapMonth}>
//       {/* <div className={styles.month}>
//         <button
//           type="button"
//           disabled={index === 1}
//           onClick={() => onChangeValue(-1)}
//           className={styles.btnMonth}
//         >
//           <IoMdArrowDropleft className={styles.iconMonth} />
//         </button>
//         <p className={styles.textMonth}>{monthName}</p>
//         <button
//           type="button"
//           disabled={index === total}
//           onClick={() => onChangeValue(+1)}
//           className={styles.btnMonth}
//         >
//           <IoMdArrowDropright className={styles.iconMonth} />
//         </button>
//       </div> */}
//       <GetMonth
//         getValue={getValue}
//         month={showMonth}
//         onChangeValue={onChangeValue}
//       />
//     </div>
//   );
// }
