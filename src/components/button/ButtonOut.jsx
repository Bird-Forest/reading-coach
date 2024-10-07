"use client";

import React, { useState } from "react";
import styles from "./Button.module.css";
import { createPortal } from "react-dom";
import OverlayModal from "../modal/OverlayModal";
import LogOutModal from "../modal/LogOutModal";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function ButtonOut() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const exitApplication = () => {
    signOut({ redirect: false });
    setShowModal(false);
    router.push(" ");
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
        Вихід
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
