import BookItemStatist from "@/components/book/BookItemStatist";
import Counter from "@/components/counter/Counter";
import GoalStatistics from "@/components/goal/GoalStatistics";
import React from "react";

export default function page() {
  return (
    <div>
      <Counter />
      <GoalStatistics />
      <BookItemStatist />
    </div>
  );
}
