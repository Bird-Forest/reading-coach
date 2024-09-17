// "use client";
// import React from "react";
// import { RxCalendar } from "react-icons/rx";
// import { IoMdArrowDropdown } from "react-icons/io";
// import styles from "./FormTrain.module.css";
// import GetPeriod from "../calendar/GetPeriod";

// export default function FormDateStart() {
//   const [startDay, setStartDay] = useState("");
//   const [openStart, setOpenStart] = useState(false);

//   const getStartDay = (event) => {
//     setStartDay(event.target.value);
//   };
//   return (
//     <div className={styles.wrapDate}>
//       <label className={styles.labelDate}>
//         <input
//           type="text"
//           defaultValue={startDay}
//           readOnly={startDay}
//           className={styles.inputDate}
//           placeholder="Початок"
//         />
//         <div className={styles.wrapIconCldr}>
//           <RxCalendar className={styles.iconCldr} />
//         </div>
//         <button
//           type="button"
//           onClick={() => setOpenStart(!openStart)}
//           className={styles.btnOpen}
//         >
//           <IoMdArrowDropdown className={styles.iconOpen} />
//         </button>
//       </label>
//       <div
//         style={{
//           top: "42px",
//           position: "absolute",
//           zIndex: "1",
//           display: !openStart ? "none" : "block",
//         }}
//       >
//         <GetPeriod getValue={getStartDay} />
//       </div>
//     </div>
//   );
// }
