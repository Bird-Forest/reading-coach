"use client";

import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styles from "./Form.module.css";
import ButtonSubmit from "../button/ButtonSubmit";
import ButtonGoogl from "../button/ButtonGoogl";
import Spinner from "../helper/Spinner";
import FieldUser from "./FieldUser";
import Notif from "../helper/Notif";
import { signIn, useSession } from "next-auth/react";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const initialValues = {
  email: "",
  pwd: "",
};

export default function FormaSignIn() {
  const t = useTranslations("home");
  const [notif, setNotif] = useState("");
  const [auth, setAuth] = useState(false);
  const router = useRouter();
  const session = useSession();
  const value = session.data;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(`${t("error_email")}`)
      .required(`${t("error_field")}`)
      .trim(),
    pwd: Yup.string()
      .min(8, `${t("error_pwd1")}`)
      .required(`${t("error_field")}`)
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
              const res = await signIn("credentials", {
                email: values.email,
                pwd: values.pwd,
                redirect: false,
              });
              setSubmitting(true);
              if (value.user.name === "404") {
                setAuth(false);
                setNotif(`${t("error_auth404")}`);
              } else {
                setAuth(true);
                resetForm();
                setSubmitting(false);
                router.push("/user");
              }
            }}
          >
            {(props) => (
              <Form className={styles.form}>
                <FieldUser
                  label={t("form_email")}
                  name="email"
                  type="text"
                  placeholder="your@email.com"
                />
                <FieldUser
                  label={t("form_pwd_1")}
                  name="pwd"
                  type="pwd"
                  placeholder={t("form_pwd_1")}
                />
                <div className={styles.wrapFieldBtn}>
                  <div className={styles.wrapTextMess}>
                    {!auth && (
                      <Notif message={notif} onClose={() => setNotif(false)} />
                    )}
                  </div>
                  <ButtonSubmit>
                    {props.isSubmitting ? <Spinner /> : `${t("btn_in")}`}
                  </ButtonSubmit>
                </div>
              </Form>
            )}
          </Formik>
          <Link href="/signup" className={styles.linkAuth}>
            {t("btn_up")}
          </Link>
        </div>
      </div>
    </div>
  );
}
