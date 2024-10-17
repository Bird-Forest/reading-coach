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
import { deleteUnreadedBooks } from "@/services/coaches";
import { useRouter } from "@/i18n/routing";

export default function Counter({ coach, id }) {
  const [isModal, setIsModal] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (!coach) return;
    const selectedBooks = coach.books;

    if (!selectedBooks) return;
    const pastDay = isPast(new Date(coach.finish));

    const unreadBook = selectedBooks.some(
      (book) => book.category === bookCategory.init
    );

    const execution = pastDay && unreadBook;
    setIsModal(execution);
  }, [coach]);

  const removeBooks = async () => {
    const coachId = coach._id;
    const update = coach;
    await deleteUnreadedBooks(coachId, update);
    router.push("/user/training");
  };

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className={styles.wrapCounter}>
      <CounterYear />
      <CounterGoal id={id} />
      {isModal &&
        createPortal(
          <OverlayModal
            content={
              <SupportModal removeBooks={removeBooks} closeModal={closeModal} />
            }
          />,
          document.body
        )}
    </div>
  );
}
