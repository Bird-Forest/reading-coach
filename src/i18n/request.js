import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale)) notFound();

  const messages = (await import(`../../messages/${locale}.json`)).default;
  // console.log("Messages:", messages); // Отладочное сообщение

  return {
    messages,
  };
});
