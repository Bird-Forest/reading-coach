import styles from "@/components/info/Main.module.css";
import MainInfo from "@/components/info/MainInfo";
import { auth } from "@/configs/auth";
import { unstable_setRequestLocale } from "next-intl/server";
import { revalidatePath } from "next/cache";

export default async function Home({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  const session = await auth();
  revalidatePath(`/`, "page");
  return (
    <section className={styles.pageMain}>
      <MainInfo session={session} />
    </section>
  );
}
