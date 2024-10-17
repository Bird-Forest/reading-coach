"use client";

import React, { useState } from "react";
import { RxCalendar } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import styles from "./FormTrain.module.css";
import GetPeriod from "../calendar/GetPeriod";
import { formatISO, isBefore, format, isPast, endOfYesterday } from "date-fns";
import GetMonth from "../calendar/GetMonth";
import { useTranslations } from "next-intl";

export default function FormDate({ trainingStart, trainingEnd }) {
  const t = useTranslations("training");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const getStartDay = (event) => {
    setStartDay(event.target.value);
    let value = formatISO(new Date(event.target.value));
    trainingStart(value);
  };

  const getEndDay = (event) => {
    setEndDay(event.target.value);
    let value = formatISO(new Date(event.target.value));
    trainingEnd(value);
  };

  const yesterday = endOfYesterday();
  const before = isBefore(new Date(startDay), new Date(yesterday));
  const past = isPast(new Date(endDay));

  let valueStart = startDay && format(new Date(startDay), "dd-MM-yyyy");
  let valueEnd = endDay && format(new Date(endDay), "dd-MM-yyyy");

  return (
    <div className={styles.formDate}>
      <div className={styles.wrapDate}>
        {before && <p className={styles.wrapError}>{t("form_error")}</p>}
        <label className={styles.labelDate}>
          <input
            type="text"
            defaultValue={valueStart}
            readOnly={valueStart}
            className={styles.inputDate}
            placeholder={t("form_start")}
          />
          <div className={styles.wrapIconCldr}>
            <RxCalendar className={styles.iconCldr} />
          </div>
          <button
            type="button"
            onClick={() => setOpenStart(!openStart)}
            className={styles.btnOpen}
          >
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
        <div
          className={!openStart ? styles.noneCalendar : styles.blockCalendar}
        >
          <GetMonth getValue={getStartDay} />
        </div>
      </div>

      <div className={styles.wrapDate}>
        {past && <p className={styles.wrapError}>Помилкова дата</p>}
        <label className={styles.labelDate}>
          <input
            type="text"
            defaultValue={valueEnd}
            readOnly={valueEnd}
            className={styles.inputDate}
            placeholder={t("form_end")}
          />
          <div className={styles.wrapIconCldr}>
            <RxCalendar className={styles.iconCldr} />
          </div>
          <button
            type="button"
            onClick={() => setOpenEnd(!openEnd)}
            className={styles.btnOpen}
          >
            <IoMdArrowDropdown className={styles.iconOpen} />
          </button>
        </label>
        <div className={!openEnd ? styles.noneCalendar : styles.blockCalendar}>
          <GetMonth getValue={getEndDay} />
        </div>
      </div>
    </div>
  );
}
