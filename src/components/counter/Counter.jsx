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
import { useRouter } from "next/navigation";
import { deleteUnreadedBooks } from "@/services/coaches";

export default function Counter({ coach }) {
  const [isModal, setIsModal] = useState(false);
  // console.log(coach);
  const router = useRouter();
  useEffect(() => {
    if (!coach) return;
    const selectedBooks = coach.books;
    // console.log(selectedBooks);
    // if (!selectedBooks) return;
    const pastDay = isPast(new Date(coach.finish));
    // console.log(pastDay);
    const unreadBook = selectedBooks.some(
      (book) => book.category === bookCategory.init
    );
    // console.log(unreadBook);
    const execution = pastDay && unreadBook;
    // console.log(execution);
    setIsModal(execution);
  }, [coach]);

  const removeBooks = async () => {
    const coachId = coach._id;
    const update = coach;
    await deleteUnreadedBooks(coachId, update);
    router.push(`/user/training`);
  };

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
              <SupportModal removeBooks={removeBooks} closeModal={closeModal} />
            }
          />,
          document.body
        )}
    </div>
  );
}
