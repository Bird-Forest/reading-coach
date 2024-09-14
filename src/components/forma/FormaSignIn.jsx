"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import Link from "next/link";
import ButtonGoogl from "../button/ButtonGoogl";
import { useRouter } from "next/navigation";
import Spinner from "../helper/Spinner";
import { loginUser } from "@/services/users";
import FieldUser from "./FieldUser";
import Notif from "../helper/Notif";

const initialValues = {
  email: "",
  pwd: "",
};

export default function FormaSignIn() {
  const [notif, setNotif] = useState("");
  const [token, setToken] = useState("");
  const router = useRouter();

  useEffect(() => {
    window.localStorage.setItem("authToken", token);
  }, [token]);

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
              const res = await loginUser(values);
              setSubmitting(true);
              setNotif(res.message);
              setToken(res.token);
              if (res.message === "Success") {
                resetForm();
                router.push(`/users/${res.id}`);
              }
            }}
          >
            {(props) => (
              <Form className={styles.form}>
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
                  placeholder="Пароль"
                />
                <div className={styles.wrapFieldBtn}>
                  <div className={styles.wrapTextMess}>
                    {notif !== "Success" && (
                      <Notif message={notif} onClose={() => setNotif(false)} />
                    )}
                  </div>
                  <ButtonSubmit>
                    {props.isSubmitting ? <Spinner /> : "Увійти"}
                  </ButtonSubmit>
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
