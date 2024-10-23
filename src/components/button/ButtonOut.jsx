"use client";

import React, { useState } from "react";
import styles from "./Button.module.css";
import { createPortal } from "react-dom";
import OverlayModal from "../modal/OverlayModal";
import LogOutModal from "../modal/LogOutModal";
import { signOut } from "next-auth/react";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ButtonOut() {
  const t = useTranslations("modal");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const exitApplication = () => {
    signOut({ redirect: false });
    // signOut();
    router.push("/");
    setShowModal(false);
  };

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.wrapBtnOut}>
      <button onClick={openModal} className={styles.btnOut}>
        {t("exit_header")}
      </button>
      {showModal &&
        createPortal(
          <OverlayModal
            content={
              <LogOutModal
                exitApplication={exitApplication}
                closeModal={closeModal}
              />
            }
          />,
          document.body
        )}
    </div>
  );
}
