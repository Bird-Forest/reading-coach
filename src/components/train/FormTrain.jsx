"use client";

import React, { useState } from "react";
import styles from "./Train.module.css";
import FormDate from "./FormDate";
import FormSelect from "./FormSelect";
// import useSWR from "swr";
import { bookCategory } from "@/constants/bookCategory";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// **** ПРИСУЕНІЙ В МОБІЛЬНІЙ ВЕРСІЇ В ДЕСКТОП НЕМА

export default function FormTrain({ userId, arrStart }) {
  // console.log(userId);
  const [begin, setBegin] = useState("");
  const [end, setEnd] = useState("");
  const [books, setBooks] = useState([]);
  // const [startDay, setStartDay] = useState("");
  // const [endDay, setEndDay] = useState("");

  const trainingStart = (value) => {
    setBegin(value);
  };
  // console.log(begin);

  const trainingEnd = (value) => {
    setEnd(value);
  };
  // console.log(end);

  // const [newTrain, setNewTrain] = useState({
  //   start: Date,
  //   finish: Date,
  //   books: [],
  //   totalPage: 0,
  //   category: bookCategory.start,
  // });

  return (
    <div className={styles.wrapFormTrain}>
      <h2 className={styles.titleTrain}>Моє тренування</h2>
      <FormDate trainingStart={trainingStart} trainingEnd={trainingEnd} />
      <FormSelect arrStart={arrStart} />
    </div>
  );
}

// const handleSubmit = async () => {
//   try {
//     const response = await fetch(`/api/coaches?userId=${userId}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(train),
//     });
//     const data = await response.json();
//     console.log("Created Coach:", data);
//   } catch (error) {
//     console.error("Error creating coach:", error);
//   }
// };
// const { data, error } = useSWR(`/api/coaches?id=${userId}`, fetcher);
