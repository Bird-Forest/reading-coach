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
import { useTranslations } from "next-intl";

const initialValues = {
  title: "",
  author: "",
  pages: "",
  year: "",
  category: bookCategory.start,
};

export default function BookForm() {
  const t = useTranslations("library");
  const [notif, setNotif] = useState("");
  const { data: session } = useSession();
  const userId = session?.user.id;

  const validationSchema = Yup.object({
    title: Yup.string()
      .required(`${t("error_field")}`)
      .trim(),
    author: Yup.string()
      .required(`${t("error_field")}`)
      .trim(),
    pages: Yup.number()
      .min(2, `${t("error_pages")}`)
      .required(`${t("error_field")}`),
    year: Yup.string()
      .min(4, `${t("error_year")}`)
      .required(`${t("error_field")}`)
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
        if (res.status === 201) {
          setNotif(`${t("mess_ok")}`);
        } else {
          setNotif(`${t("mess_er")}`);
        }
        setSubmitting(true);
        resetForm();
      }}
    >
      {(props) => (
        <Form className={styles.createForm}>
          <FieldBook label={t("form_title")} name="title" placeholder="..." />
          <FieldBook label={t("form_author")} name="author" placeholder="..." />
          <FieldBook label={t("form_year")} name="year" placeholder="..." />
          <FieldBook label={t("form_pages")} name="pages" placeholder="..." />
          <div className={styles.wrapBtnAdd}>
            <div className={styles.wrapTextMess}>
              {notif && (
                <Notif message={notif} onClose={() => setNotif(false)} />
              )}
            </div>
            <button type="submit" className={styles.btnCreate}>
              {props.isSubmitting ? <SpinnerO /> : `${t("form_btn")}`}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
