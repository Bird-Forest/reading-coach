import styles from "@/components/liba/Library.module.css";

export default function LayoutLib({ children }) {
  return <div className={styles.libPage}>{children}</div>;
}
