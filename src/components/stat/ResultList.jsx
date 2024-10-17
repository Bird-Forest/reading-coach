"use client";

import React, { useEffect, useState } from "react";
import styles from "./Result.module.css";
import { format } from "date-fns";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ResultList() {
  const t = useTranslations("statistics");
  const { data: session } = useSession();
  const id = session?.user.id;
  const shouldFetch = !!id;
  const { data } = useSWR(
    shouldFetch ? `/api/coaches?id=${id}` : null,
    fetcher,
    {
      refreshInterval: 3600,
    }
  );
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!data) return;
    setResults(data.progress || []);
  }, [data]);

  const Arr = Array.isArray(results) && results.length > 0;

  return (
    <div className={styles.wrapListResult}>
      <p className={styles.titleList}>
        <span>{t("list_title")}</span>
      </p>
      <ul className={styles.wrapList}>
        {Arr ? (
          results.map((result) => (
            <li key={result._id} className={styles.wrapItem}>
              <p className={styles.deep}>
                {format(new Date(result.date), "dd.MM.yyyy")}
              </p>
              <p className={styles.grey}>
                {format(new Date(result.date), "HH.mm.ss")}
              </p>
              <p className={styles.deep}>
                {result.pagesRead}
                <span className={styles.grey}>{t("list_page")}</span>
              </p>
            </li>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}
