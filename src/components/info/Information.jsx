import React from "react";
import styles from "./Main.module.css";
import { abril } from "@/app/fonts";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useTranslations } from "next-intl";

export default function Information() {
  const t = useTranslations("home");
  return (
    <div className={styles.wrapInfo}>
      <h1 className={`${abril.className} ${styles.infoTitle}`}>
        Books Reading
      </h1>
      <div className={styles.caseInfo}>
        <div className={styles.blockInfo}>
          <h5 className={styles.blockTitle}>{t("title_1")}</h5>
          <div className={styles.boxInfo}>
            <div className={styles.wrapBoxIcon}>
              <MdOutlineArrowForwardIos className={styles.boxIcon} />
            </div>

            <p className={styles.boxText}>{t("text_11")}</p>
          </div>
          <div className={styles.boxInfo}>
            <div className={styles.wrapBoxIcon}>
              <MdOutlineArrowForwardIos className={styles.boxIcon} />
            </div>
            <p className={styles.boxText}>{t("text_12")}</p>
          </div>
          <div className={styles.boxInfo}>
            <div className={styles.wrapBoxIcon}>
              <MdOutlineArrowForwardIos className={styles.boxIcon} />
            </div>
            <p className={styles.boxText}>{t("text_13")}</p>
          </div>
        </div>
        <div className={styles.blockInfo}>
          <h5 className={styles.blockTitle}>{t("title_2")}</h5>
          <div className={styles.boxInfo}>
            <div className={styles.wrapBoxIcon}>
              <MdOutlineArrowForwardIos className={styles.boxIcon} />
            </div>
            <p className={styles.boxText}>{t("text_21")}</p>
          </div>
          <div className={styles.boxInfo}>
            <div className={styles.wrapBoxIcon}>
              <MdOutlineArrowForwardIos className={styles.boxIcon} />
            </div>
            <p className={styles.boxText}>{t("text_22")}</p>
          </div>
          <div className={styles.boxInfo}>
            <div className={styles.wrapBoxIcon}>
              <MdOutlineArrowForwardIos className={styles.boxIcon} />
            </div>
            <p className={styles.boxText}>{t("text_23")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
