"use client";

import React, { useState } from "react";
import styles from "./Result.module.css";
import { format } from "date-fns";
import { updateReportCoach } from "@/services/coaches";
// import Spinner from "../helper/Spinner";
// import { useFormStatus } from "react-dom";

export default function ResultForm({ coach }) {
  // const { pending } = useFormStatus();
  const [result, setResult] = useState("");
  const nowDate = format(new Date(), "dd.MM.yyyy");
  const id = coach ? coach._id : "";

  const report = {
    date: new Date(),
    pagesRead: Number(result),
  };

  return (
    <div className={styles.wrapFormResult}>
      <div className={styles.wrapField}>
        <div className={styles.wrapDate}>
          <label className={styles.label}>
            <span className={styles.labelText}>Дата</span>
            <input
              type="text"
              defaultValue={nowDate}
              className={styles.input}
            />
          </label>
        </div>
        <div className={styles.wrapPage}>
          <label className={styles.label}>
            <span className={styles.labelText}>Кількість сторінок</span>
            <input
              type="text"
              value={result}
              onChange={(e) => setResult(e.target.value)}
              className={styles.input}
            />
          </label>
        </div>
      </div>
      <form
        action={async () => {
          const res = await updateReportCoach(id, report);
          setResult("");
        }}
        className={styles.wrapBtnResult}
      >
        <button button="button" className={styles.btnResult}>
          Додати результат
          {/* {pending ? <Spinner /> : "Додати результат"} */}
        </button>
      </form>
    </div>
  );
}
