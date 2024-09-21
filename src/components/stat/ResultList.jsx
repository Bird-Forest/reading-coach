import React from "react";
import styles from "./Result.module.css";

export default function ResultList() {
  return (
    <div className={styles.wrapListResult}>
      <p className={styles.titleList}>
        <span>СТАТИСТИКА</span>
      </p>
      <ul className={styles.wrapList}>
        <li className={styles.wrapItem}>
          <p className={styles.deep}>10.10.2019</p>
          <p className={styles.grey}>08:10:23</p>
          <p className={styles.deep}>
            32<span className={styles.grey}>стор.</span>
          </p>
        </li>
        <li className={styles.wrapItem}>
          <p className={styles.deep}>10.10.2019</p>
          <p className={styles.grey}>08:10:23</p>
          <p className={styles.deep}>
            32<span className={styles.grey}>стор.</span>
          </p>
        </li>
        <li className={styles.wrapItem}>
          <p className={styles.deep}>10.10.2019</p>
          <p className={styles.grey}>08:10:23</p>
          <p className={styles.deep}>
            32<span className={styles.grey}>стор.</span>
          </p>
        </li>
        <li className={styles.wrapItem}>
          <p className={styles.deep}>10.10.2019</p>
          <p className={styles.grey}>08:10:23</p>
          <p className={styles.deep}>
            32<span className={styles.grey}>стор.</span>
          </p>
        </li>
        <li className={styles.wrapItem}>
          <p className={styles.deep}>10.10.2019</p>
          <p className={styles.grey}>08:10:23</p>
          <p className={styles.deep}>
            32<span className={styles.grey}>стор.</span>
          </p>
        </li>
      </ul>
    </div>
  );
}
