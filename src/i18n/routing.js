import { defineRouting } from "next-intl/routing";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
// import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["uk", "en"],

  // Used when no locale matches
  defaultLocale: "uk",
  // localePrefix: "always",
  // pathnames: {
  //   "/": "/",
  //   "/pathnames": {
  //     uk: "/pathnames",
  //     en: "/pfadnamen",
  //   },
  // },
});
// export const { Link, getPathname, redirect, usePathname, useRouter } =
//   createLocalizedPathnamesNavigation(routing);
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
