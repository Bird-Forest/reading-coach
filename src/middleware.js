import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  // matcher: ["/", "/(uk|en)/:path*"],
  // matcher: ["/", "/(uk|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
  matcher: [
    "/((?!api|_next|_vercel|.*\\..*).*)", // Исключаем пути к API
    "/(uk|en)/:path*",
  ],
};
