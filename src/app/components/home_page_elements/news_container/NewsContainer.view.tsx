import styles from "./NewsContainer.module.scss";

type Props = {
  children: any;
  date: string;
};

export default function NewsContainerView({ children, date }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.headerDate}>Project UpDates by {date}</div>

      <div className={styles.updatesArea}>{children}</div>
    </div>
  );
}
