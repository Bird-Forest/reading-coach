import { format } from "date-fns";

export default function findCurrentMonth(datePeriod) {
  const currentDate = format(new Date(), "yyyy-MM-dd");
  for (const monthArray of datePeriod) {
    if (
      monthArray.some(
        (dateString) =>
          format(new Date(dateString), "yyyy-MM-dd") === currentDate
      )
    ) {
      const idMonth = datePeriod.indexOf(monthArray);
      return idMonth;
    }
  }
  return null;
}
