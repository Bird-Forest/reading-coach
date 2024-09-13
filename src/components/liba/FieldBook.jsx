"use client";

import React from "react";
import { useField } from "formik";
import styles from "./Library.module.css";

export default function FieldBook({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={styles.fieldbook}>
      <label className={styles.label}>
        {label}
        <input
          {...field}
          {...props}
          placeholder={props.placeholder}
          className={styles.input}
        />
      </label>
      <div className={styles.wrapError}>
        {meta.touched && meta.error ? (
          <p className={styles.textError}>{meta.error}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
