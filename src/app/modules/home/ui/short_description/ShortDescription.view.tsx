import Link from "next/link";
import styles from "./ShortDescription.module.scss";

export default function ShortDescriptionView() {
  return (
    <div className={styles.parent}>
      <h1 className={styles.mainTitle}>
        <span className={styles.span}>Refine your coding process</span>
        <br />
        <span className={styles.span}>at</span>
        <br />
        <span className={styles.span}>Blame Your Code</span>
      </h1>
      <div className={styles.descriptionContainer}>
        <p className={styles.textDescription}>
          A platform where every line of code is an opportunity for growth.
          Submit your work, embrace constructive critiques, and elevate your
          skills through collaborative code reviews.
        </p>
      </div>
      <button className={styles.button}>
        <Link href="/pages/registration">Start blaming!</Link>
      </button>
    </div>
  );
}
