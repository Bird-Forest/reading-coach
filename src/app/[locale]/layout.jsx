import { Montserrat } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import { Providers } from "@/components/helper/Providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { unstable_setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({ params: { locale } }) {
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     title: t("title"),
//   };
// }

export const metadata = {
  title: "Book coach",
  description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={montserrat.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <div className={styles.container}>
              <div className={styles.top}>
                <Header />
              </div>
              <main className={styles.page}>{children}</main>
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
