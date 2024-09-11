"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import Link from "next/link";
import ButtonGoogl from "../button/ButtonGoogl";
import FieldInput from "./FieldInput";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/users";
import Spinner from "../helper/Spinner";

const initialValues = {
  name: "",
  email: "",
  pwd: "",
  confirmPwd: "",
};

export default function FormaSignUp() {
  const [message, setMessage] = useState(null);
  const router = useRouter();
  console.log(message);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "мінімальна кількість символів 2")
      .required("поле не може бути порожнім")
      .trim(),
    email: Yup.string()
      .email("не вірний email")
      .required("поле не може бути порожнім")
      .trim(),
    pwd: Yup.string()
      .min(8, "мінімальна кількість символів 8")
      .required("поле не може бути порожнім")
      .trim(),
    confirmPwd: Yup.string()
      .oneOf([Yup.ref("pwd"), null], "паролі не співпадають")
      .required("поле не може бути порожнім")
      .trim(),
  });
  return (
    <div className={styles.imgAuth}>
      <div className={styles.bgAuth}>
        <div className={styles.wrapForm}>
          <ButtonGoogl />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const data = await registerUser(values);
              //   setSubmitting(true);
              setMessage(data);
              resetForm();
              router.push("/library");
            }}
          >
            {(props) => (
              <Form className={styles.form}>
                <FieldInput
                  label="Ім’я"
                  name="name"
                  type="name"
                  placeholder="..."
                />
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
                  placeholder="..."
                />
                <FieldInput
                  label="Підтвердити пароль"
                  name="confirmPwd"
                  type="confirmPwd"
                  placeholder="..."
                />
                <div className={styles.wrapFieldBtn}>
                  <div className={styles.wrapTextMess}>
                    {!message == null && (
                      <p className={styles.textMess}>{message.message}</p>
                    )}
                  </div>
                  <ButtonSubmit>
                    {props.isSubmitting ? <Spinner /> : "Увійти"}
                  </ButtonSubmit>
                </div>
              </Form>
            )}
          </Formik>
          <div className={styles.wrapLink}>
            <p className={styles.textLink}>Вже з нами?</p>
            <Link href="/signin" className={styles.linkAuth}>
              Увійти
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
