"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import Link from "next/link";
import ButtonGoogl from "../button/ButtonGoogl";
import FieldInput from "./FieldInput";
import { signIn } from "@/configs/auth";
import { useRouter } from "next/navigation";

const initialValues = {
  email: "",
  pwd: "",
};

export default function FormaSignIn() {
  const [message, setMessage] = useState(" ");
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("не вірний email")
      .required("поле не може бути порожнім")
      .trim(),
    pwd: Yup.string()
      .min(8, "мінімальна кількість символів 8")
      .required("поле не може бути порожнім")
      .trim(),
  });
  return (
    <div className={styles.imgLogin}>
      <div className={styles.bgLogin}>
        <div className={styles.wrapForm}>
          <ButtonGoogl />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const data = await signIn("credentials", values);
              //   setSubmitting(true);
              setMessage(data);
              resetForm();
              router.push("/library");
            }}
          >
            {(props) => (
              <Form className={styles.form}>
                <FieldInput
                  label="Електронна адреса"
                  name="email"
                  type="text"
                  placeholder="your@email.com"
                />
                <FieldInput
                  label="Пароль"
                  name="pwd"
                  type="pwd"
                  placeholder="Пароль"
                />
                <div className={styles.wrapFieldBtn}>
                  <div className={styles.wrapTextMess}>
                    {message && (
                      <p className={styles.textMess}>{message.data}</p>
                    )}
                  </div>
                  <ButtonSubmit>Увійти</ButtonSubmit>
                </div>
              </Form>
            )}
          </Formik>
          <Link href="/signup" className={styles.linkAuth}>
            Реєстрація
          </Link>
        </div>
      </div>
    </div>
  );
}
