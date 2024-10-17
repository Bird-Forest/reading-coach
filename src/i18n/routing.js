import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["uk", "en"],

  defaultLocale: "uk",
});
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);

// localePrefix: "always",
// pathnames: {
//   "/": "/",
//   "/pathnames": {
//     uk: "/pathnames",
//     en: "/pfadnamen",
//   },
// },
