"use client";

import React, { useEffect, useState } from "react";
import styles from "./Counter.module.css";
import CounterYear from "./CounterYear";
import CounterGoal from "./CounterGoal";
import { isPast } from "date-fns";
import { bookCategory } from "@/constants/bookCategory";
import OverlayModal from "../modal/OverlayModal";
import SupportModal from "../modal/SupportModal";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

export default function Counter({ coach }) {
  const [isModal, setIsModal] = useState(false);
  console.log(coach);

  useEffect(() => {
    if (!coach) return;
    const selectedBooks = coach.books;
    console.log(selectedBooks);
    if (!selectedBooks) return;
    const pastDay = isPast(new Date(coach.finish));
    console.log(pastDay);
    const unreadBook = selectedBooks.some(
      (book) => book.category === bookCategory.init
    );
    console.log(unreadBook);
    const execution = pastDay && unreadBook;
    console.log(execution);
    setIsModal(execution);
  }, [coach]);

  const path = usePathname();
  const segment = path.split("/");
  const id = segment[2];
  const pathTrain = `/users/${id}/training`;
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className={styles.wrapCounter}>
      <CounterYear />
      <CounterGoal coach={coach} />
      {isModal &&
        createPortal(
          <OverlayModal
            content={
              <SupportModal pathTrain={pathTrain} closeModal={closeModal} />
            }
          />,
          document.body
        )}
    </div>
  );
}
