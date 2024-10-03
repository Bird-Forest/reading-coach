"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import Link from "next/link";
import ButtonGoogl from "../button/ButtonGoogl";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/users";
import Spinner from "../helper/Spinner";
import FieldUser from "./FieldUser";
import Notif from "../helper/Notif";

const initialValues = {
  name: "",
  email: "",
  pwd: "",
  confirmPwd: "",
};

export default function FormaSignUp() {
  const [notif, setNotif] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem("authToken", token);
  }, [token]);

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
              const res = await registerUser(values);
              setSubmitting(true);
              setNotif(res.message);
              setToken(res.token);
              if (notif === "Success") {
                resetForm();
                router.push(`/user/library`);
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
                    {notif !== "Success" && (
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
