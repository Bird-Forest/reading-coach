import React from "react";
import styles from "./Main.module.css";
// import { abril } from "@/app/fonts";
// import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";
import Information from "./Information";

export default function MainInfo() {
  return (
    <div className={styles.wrapMainInfo}>
      <Information />
      <div className={styles.wrapBtns}>
        <Link href="/signin" className={styles.btnLogin}>
          Увійти
        </Link>
        <Link href="/signup" className={styles.btnAuth}>
          Реєстрація
        </Link>
      </div>
    </div>
    // <div className={styles.wrapInfo}>
    //   <h1 className={`${abril.className} ${styles.infoTitle}`}>
    //     Books Reading
    //   </h1>
    //   <div className={styles.blockInfo}>
    //     <h5 className={styles.blockTitle}>Допоможе вам</h5>
    //     <div className={styles.boxInfo}>
    //       <div className={styles.wrapBoxIcon}>
    //         <MdOutlineArrowForwardIos className={styles.boxIcon} />
    //       </div>

    //       <p className={styles.boxText}>
    //         Швидше сформулювати свою ціль і розпочати читати
    //       </p>
    //     </div>
    //     <div className={styles.boxInfo}>
    //       <div className={styles.wrapBoxIcon}>
    //         <MdOutlineArrowForwardIos className={styles.boxIcon} />
    //       </div>
    //       <p className={styles.boxText}>
    //         Пропорційно розподілити навантаження на кожний день
    //       </p>
    //     </div>
    //     <div className={styles.boxInfo}>
    //       <div className={styles.wrapBoxIcon}>
    //         <MdOutlineArrowForwardIos className={styles.boxIcon} />
    //       </div>
    //       <p className={styles.boxText}>Відстежувати особистий успіх</p>
    //     </div>
    //   </div>
    //   <div className={styles.blockInfo}>
    //     <h5 className={styles.blockTitle}>Також ви зможете </h5>
    //     <div className={styles.boxInfo}>
    //       <div className={styles.wrapBoxIcon}>
    //         <MdOutlineArrowForwardIos className={styles.boxIcon} />
    //       </div>
    //       <p className={styles.boxText}>
    //         Формувати особисту думку незалежну від інших
    //       </p>
    //     </div>
    //     <div className={styles.boxInfo}>
    //       <div className={styles.wrapBoxIcon}>
    //         <MdOutlineArrowForwardIos className={styles.boxIcon} />
    //       </div>
    //       <p className={styles.boxText}>
    //         Підвищити свої професійні якості опираючись на нові знання
    //       </p>
    //     </div>
    //     <div className={styles.boxInfo}>
    //       <div className={styles.wrapBoxIcon}>
    //         <MdOutlineArrowForwardIos className={styles.boxIcon} />
    //       </div>
    //       <p className={styles.boxText}>Стати цікавим співрозмовником</p>
    //     </div>
    //   </div>

    // </div>
  );
}
