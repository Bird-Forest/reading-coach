"use client";

import { useField } from "formik";
import React from "react";
import styles from "./Form.module.css";

export default function FieldUser({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className={styles.wrapField}>
      <label className={styles.label}>
        <p className={styles.textLabel}>
          {label}
          <span className={styles.red}>{" *"}</span>
        </p>
        <input
          {...field}
          {...props}
          placeholder={props.placeholder}
          required
          className={styles.input}
        />
      </label>
      <div className={styles.wrapTextError}>
        {meta.touched && meta.error ? (
          <p className={styles.textError}>{meta.error}</p>
        ) : null}
      </div>
    </div>
  );
}
