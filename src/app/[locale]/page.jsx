import styles from "@/components/info/Main.module.css";
import MainInfo from "@/components/info/MainInfo";
import { auth } from "@/configs/auth";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const session = await auth();
  return (
    <section className={styles.pageMain}>
      <MainInfo session={session} />
    </section>
  );
}
