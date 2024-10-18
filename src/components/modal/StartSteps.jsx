"use client";

import React, { useState } from "react";
import { MdMenuBook } from "react-icons/md";
import { PiArrowElbowDownRightBold } from "react-icons/pi";
import { RiFlagLine } from "react-icons/ri";
import styles from "./Modal.module.css";
import { useTranslations } from "next-intl";

export default function StartSteps() {
  const [isShow, setIsShow] = useState(true);
  const t = useTranslations("modal");

  return (
    <div className={styles.wrapStart}>
      <div className={styles.wrapSteps}>
        <div className={styles.step}>
          <h5 className={styles.titleStep}>{t("start_step1")}</h5>
          <div className={styles.wrapSubTitleStep}>
            <div className={styles.wrapIconStep}>
              <MdMenuBook className={styles.iconBook} />
            </div>
            <h6 className={styles.subtitleStep}>{t("step1_title")}</h6>
          </div>
          <div className={styles.wrapTextStep}>
            <div className={styles.wrapIconStep}>
              <PiArrowElbowDownRightBold className={styles.iconStep} />
            </div>
            <p className={styles.textStep}>{t("step1_text")}</p>
          </div>
        </div>
        <div className={styles.step}>
          <h5 className={styles.titleStep}>{t("start_step2")}</h5>
          <div className={styles.wrapSubTitleStep}>
            <div className={styles.wrapIconStep}>
              <RiFlagLine className={styles.iconBook} />
            </div>
            <h6 className={styles.subtitleStep}>{t("step2_title")}</h6>
          </div>
          <div className={styles.wrapTextStep}>
            <div className={styles.wrapIconStep}>
              <PiArrowElbowDownRightBold className={styles.iconStep} />
            </div>
            <p className={styles.textStep}>{t("step2_text")}</p>
          </div>
        </div>
      </div>
      <div className={styles.wrapBtnStep}>
        <button
          type="button"
          onClick={() => setIsShow(false)}
          className={`${styles.btnStep} ${styles.btnOrang}`}
        >
          Ok
        </button>
      </div>
    </div>
  );
}
