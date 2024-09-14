import styles from "@/components/train/Train.module.css";

export default function LayoutTrain({ children }) {
  return <div className={styles.trainPage}>{children}</div>;
}
