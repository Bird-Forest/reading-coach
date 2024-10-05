"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./BookForm.module.css";
import { bookCategory } from "@/constants/bookCategory";
import FieldBook from "./FieldBook";
import { createBook } from "@/services/books";
import Notif from "../helper/Notif";
import SpinnerO from "../helper/SpinnerO";
import { useSession } from "next-auth/react";

const initialValues = {
  title: "",
  author: "",
  pages: "",
  year: "",
  category: bookCategory.start,
};

export default function BookForm() {
  const [notif, setNotif] = useState("");
  const { data: session } = useSession();
  const userId = session?.user.id;

  const validationSchema = Yup.object({
    title: Yup.string().required("поле не може бути порожнім").trim(),
    author: Yup.string().required("поле не може бути порожнім").trim(),
    pages: Yup.number()
      .min(2, "мінімальна кількість символів 2")
      .required("поле не може бути порожнім"),
    year: Yup.string()
      .min(4, "мінімальна кількість символів 4")
      .required("поле не може бути порожнім")
      .trim(),
    category: Yup.string()
      .oneOf(Object.values(bookCategory))
      .default(bookCategory.start),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await createBook(values, userId);
        setSubmitting(true);
        setNotif(res.message);
        resetForm();
      }}
    >
      {(props) => (
        <Form className={styles.createForm}>
          <FieldBook label=" Назва книги" name="title" placeholder="..." />
          <FieldBook label="Автор книги" name="author" placeholder="..." />
          <FieldBook label="Рік випуску" name="year" placeholder="..." />
          <FieldBook
            label="Кількість сторінок"
            name="pages"
            placeholder="..."
          />
          <div className={styles.wrapBtnAdd}>
            <div className={styles.wrapTextMess}>
              {notif && (
                <Notif message={notif} onClose={() => setNotif(false)} />
              )}
            </div>
            <button type="submit" className={styles.btnCreate}>
              {props.isSubmitting ? <SpinnerO /> : "Додати"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
