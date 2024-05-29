import Image from "next/image";
import styles from "./page.module.css";
import BasicButtonGroup from "./ui/components/BasicButtonGroup";

export default function Home() {
  return (
    <main className={styles.main}>
      <BasicButtonGroup />
    </main>
  );
}
