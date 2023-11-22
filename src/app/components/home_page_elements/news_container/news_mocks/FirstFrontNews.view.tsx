import styles from "./News.module.scss";
import { BsBrush } from "@react-icons/all-files/bs/BsBrush";

export default function FirstBackNewsView() {
  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <i className={styles.icon}>
          <BsBrush size="34" />
        </i>
        <span className={styles.text}>FrontEnd</span>
      </div>
      <ul className={styles.list}>
        <li>
          <h4 className={styles.text}>Full project redisign.</h4>
        </li>
        <li>
          <h4 className={styles.text}>Dependency Injection implementation.</h4>
        </li>
        <li>
          <h4 className={styles.text}>Responsive Web Design.</h4>
        </li>
      </ul>
    </div>
  );
}
