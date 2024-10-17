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
import { signIn } from "next-auth/react";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const initialValues = {
  name: "",
  email: "",
  pwd: "",
  confirmPwd: "",
};

export default function FormaSignUp() {
  const t = useTranslations("home");
  const [notif, setNotif] = useState("");
  const [auth, setAuth] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, `${t("error_name")}`)
      .required(`${t("error_field")}`)
      .trim(),
    email: Yup.string()
      .email(`${t("error_email")}`)
      .required(`${t("error_field")}`)
      .trim(),
    pwd: Yup.string()
      .min(8, `${t("error_pwd1")}`)
      .required(`${t("error_field")}`)
      .trim(),
    confirmPwd: Yup.string()
      .oneOf([Yup.ref("pwd"), ""], `${t("error_pwd2")}`)
      .required(`${t("error_field")}`)
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
                router.push("/user/library");
              } else {
                setAuth(false);
                setNotif(`${t("error_auth")}`);
              }
            }}
          >
            {(props) => (
              <Form className={styles.form}>
                <FieldUser
                  label={t("form_name")}
                  name="name"
                  type="name"
                  placeholder="..."
                />
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
                  placeholder="..."
                />
                <FieldUser
                  label={t("form_pwd_2")}
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
                    {props.isSubmitting ? <Spinner /> : `${t("form_btn")}`}
                  </ButtonSubmit>
                </div>
              </Form>
            )}
          </Formik>
          <div className={styles.wrapLink}>
            <p className={styles.textLink}>{t("form_text")}</p>
            <Link href="/signin" className={styles.linkAuth}>
              {t("btn_in")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
