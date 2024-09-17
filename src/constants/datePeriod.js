import { eachDayOfInterval } from "date-fns";
// export const datePeriod = eachDayOfInterval({
//   start: new Date(2024, 6, 1),
//   end: new Date(2025, 11, 31),
// });

const jule24 = eachDayOfInterval({
  start: new Date(2024, 6, 1),
  end: new Date(2024, 7, 11),
});
const august24 = eachDayOfInterval({
  start: new Date(2024, 6, 29),
  end: new Date(2024, 8, 8),
});
const september24 = eachDayOfInterval({
  start: new Date(2024, 7, 26),
  end: new Date(2024, 9, 6),
});
const october24 = eachDayOfInterval({
  start: new Date(2024, 8, 30),
  end: new Date(2024, 10, 10),
});
const november24 = eachDayOfInterval({
  start: new Date(2024, 9, 28),
  end: new Date(2024, 11, 8),
});
const december24 = eachDayOfInterval({
  start: new Date(2024, 10, 25),
  end: new Date(2025, 0, 5),
});
const january25 = eachDayOfInterval({
  start: new Date(2024, 11, 30),
  end: new Date(2025, 1, 9),
});
const february25 = eachDayOfInterval({
  start: new Date(2024, 0, 27),
  end: new Date(2025, 2, 9),
});
const march25 = eachDayOfInterval({
  start: new Date(2024, 1, 24),
  end: new Date(2025, 3, 6),
});
const april25 = eachDayOfInterval({
  start: new Date(2024, 2, 31),
  end: new Date(2025, 4, 11),
});
const may25 = eachDayOfInterval({
  start: new Date(2024, 3, 28),
  end: new Date(2025, 5, 8),
});
const june25 = eachDayOfInterval({
  start: new Date(2024, 4, 26),
  end: new Date(2025, 6, 6),
});
const jule25 = eachDayOfInterval({
  start: new Date(2024, 5, 30),
  end: new Date(2024, 7, 10),
});
const august25 = eachDayOfInterval({
  start: new Date(2024, 6, 28),
  end: new Date(2024, 8, 7),
});
const september25 = eachDayOfInterval({
  start: new Date(2024, 8, 1),
  end: new Date(2024, 9, 12),
});
const october25 = eachDayOfInterval({
  start: new Date(2024, 8, 29),
  end: new Date(2024, 10, 9),
});
const november25 = eachDayOfInterval({
  start: new Date(2024, 9, 27),
  end: new Date(2024, 11, 7),
});
const december25 = eachDayOfInterval({
  start: new Date(2024, 11, 1),
  end: new Date(2025, 0, 11),
});
export const datePeriod = [
  jule24,
  august24,
  september24,
  october24,
  november24,
  december24,
  january25,
  february25,
  march25,
  april25,
  may25,
  june25,
  jule25,
  august25,
  september25,
  october25,
  november25,
  december25,
];
