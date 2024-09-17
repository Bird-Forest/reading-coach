import React from "react";
import styles from "./Train.module.css";
import FormDate from "./FormDate";
import FormSelect from "./FormSelect";
import { createCoach } from "@/services/coaches";

export default async function FormTrain({ id, arrStart }) {
  const train = {
    start: "",
    finish: "",
    books: [],
    totalPage: 0,
  };
  const data = await createCoach(train, id);
  console.log(data);

  return (
    <div className={styles.wrapFormTrain}>
      <h2 className={styles.titleTrain}>Моє тренування</h2>
      <FormDate id={id} />
      <FormSelect id={id} arrStart={arrStart} />
    </div>
  );
}

{
  /* <IoMdArrowDropdown className={styles.iconOpen} /> */
}
