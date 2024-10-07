"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import Link from "next/link";
import ButtonGoogl from "../button/ButtonGoogl";
import { useRouter } from "next/navigation";
import Spinner from "../helper/Spinner";
import FieldUser from "./FieldUser";
import Notif from "../helper/Notif";
import { signIn } from "next-auth/react";

const initialValues = {
  name: "",
  email: "",
  pwd: "",
  confirmPwd: "",
};

export default function FormaSignUp() {
  const [notif, setNotif] = useState("");
  const [auth, setAuth] = useState(false);
  const router = useRouter();

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
      .oneOf([Yup.ref("pwd"), ""], "паролі не співпадають")
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
              const res = await signIn("credentials", {
                name: values.name,
                email: values.email,
                pwd: values.pwd,
                redirect: false,
              });
              setSubmitting(true);
              if (res && !res.error) {
                setAuth(true);
                resetForm();
                setSubmitting(false);
                router.push(`/user/library`);
              } else {
                setAuth(false);
                setNotif("Помилка авторизації");
              }
            }}
          >
            {(props) => (
              <Form className={styles.form}>
                <FieldUser
                  label="Ім’я"
                  name="name"
                  type="name"
                  placeholder="..."
                />
                <FieldUser
                  label="Електронна адреса"
                  name="email"
                  type="text"
                  placeholder="your@email.com"
                />
                <FieldUser
                  label="Пароль"
                  name="pwd"
                  type="pwd"
                  placeholder="..."
                />
                <FieldUser
                  label="Підтвердити пароль"
                  name="confirmPwd"
                  type="confirmPwd"
                  placeholder="..."
                />
                <div className={styles.wrapFieldBtn}>
                  <div className={styles.wrapTextMess}>
                    {!auth && (
                      <Notif message={notif} onClose={() => setNotif(false)} />
                    )}
                  </div>
                  <ButtonSubmit>
                    {props.isSubmitting ? <Spinner /> : "Зареєструватися"}
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
