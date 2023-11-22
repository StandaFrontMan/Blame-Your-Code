import styles from "./NewsContainer.module.scss";

type Props = {
  children: any;
  date: string;
};

export default function NewsContainerView({ children, date }: Props) {
  return (
    <div className="border-2">
      <div className={styles.headerDate}>Project UpDates by {date}</div>
      <div className={styles.linksArea}>
        <a
          href="https://github.com/StandaFrontMan/Blame-Your-Code"
          className={styles.link}
        >
          GitHub
        </a>
        <a
          href="https://github.com/Emelyanov535/Blame-Your-Code"
          className={styles.link}
        >
          GitHub
        </a>
      </div>
      <div className={styles.updatesArea}>{children}</div>
    </div>
  );
}
