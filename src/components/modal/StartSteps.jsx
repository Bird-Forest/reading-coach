"use client";

import React, { useState } from "react";
import { MdMenuBook } from "react-icons/md";
import { PiArrowElbowDownRightBold } from "react-icons/pi";
import { RiFlagLine } from "react-icons/ri";
import styles from "./Modal.module.css";

export default function StartSteps() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div
      style={{
        display: isShow ? "block" : "none",
        top: "94px",
        position: "absolute",
      }}
    >
      <div className={styles.wrapStart}>
        <div className={styles.wrapSteps}>
          <div className={styles.step}>
            <h5 className={styles.titleStep}>Крок 1.</h5>
            <div className={styles.wrapSubTitleStep}>
              <div className={styles.wrapIcon}>
                <MdMenuBook className={styles.iconBook} />
              </div>
              <h6 className={styles.subtitleStep}>
                Створіть особисту бібліотеку
              </h6>
            </div>
            <div className={styles.wrapTextStep}>
              <div className={styles.wrapIcon}>
                <PiArrowElbowDownRightBold className={styles.iconStep} />
              </div>
              <p className={styles.textStep}>
                Додайте до неї книжки, які маєте намір прочитати.
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <h5 className={styles.titleStep}>Крок 2.</h5>
            <div className={styles.wrapSubTitleStep}>
              <div className={styles.wrapIcon}>
                <RiFlagLine className={styles.iconBook} />
              </div>
              <h6 className={styles.subtitleStep}>
                Сформуйте своє перше тренування
              </h6>
            </div>
            <div className={styles.wrapTextStep}>
              <div className={styles.wrapIcon}>
                <PiArrowElbowDownRightBold className={styles.iconStep} />
              </div>
              <p className={styles.textStep}>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapBtnStep}>
          <button
            type="button"
            onClick={() => setIsShow(false)}
            className={styles.btnStep}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
