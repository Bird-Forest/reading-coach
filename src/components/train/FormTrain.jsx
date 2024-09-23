// "use client";

// import React from "react";
// import styles from "./Train.module.css";
// import FormDate from "./FormDate";
// import FormSelect from "./FormSelect";
// import useSWR from "swr";
// import { bookCategory } from "@/constants/bookCategory";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// **** ПРИСУЕНІЙ В МОБІЛЬНІЙ ВЕРСІЇ В ДЕСКТОП НЕМА

// export default function FormTrain({ trainingStart, trainingEnd, choosedBook }) {
// console.log(userId);
// const [begin, setBegin] = useState("");
// const [end, setEnd] = useState("");
// const [books, setBooks] = useState([]);
// const [startDay, setStartDay] = useState("");
// const [endDay, setEndDay] = useState("");

// const trainingStart = (value) => {
//   setBegin(value);
// };
// console.log(begin);

// const trainingEnd = (value) => {
//   setEnd(value);
// };
// console.log(end);

// const [newTrain, setNewTrain] = useState({
//   start: Date,
//   finish: Date,
//   books: [],
//   totalPage: 0,
//   category: bookCategory.start,
// });

//   return (
//     <div className={styles.wrapFormTrain}>
//       <h2 className={styles.titleTrain}>Моє тренування</h2>
//       <FormDate trainingStart={trainingStart} trainingEnd={trainingEnd} />
//       <FormSelect choosedBook={choosedBook} />
//     </div>
//   );
// }
