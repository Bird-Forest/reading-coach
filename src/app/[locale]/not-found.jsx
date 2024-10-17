"use client";

import NotPage from "@/components/helper/NotPage";
// import Error from "next/error";
import { unstable_setRequestLocale } from "next-intl/server";
// import { routing } from "@/i18n/routing";

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

export default function NotFound() {
  unstable_setRequestLocale(locale);
  return <NotPage />;
}
