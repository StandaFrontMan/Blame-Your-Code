import styles from "./News.module.scss";
import { AiFillSliders } from "@react-icons/all-files/ai/AiFillSliders";

export default function FirstBackNewsView() {
  return (
    <div className={styles.container}>
      <div className={styles.titleBlock}>
        <i className={styles.icon}>
          <AiFillSliders size="34" />
        </i>
        <span className={styles.text}>BackEnd</span>
      </div>
      <ul className={styles.list}>
        <li>
          <h4 className={styles.text}>CORS.</h4>
        </li>
        <li>
          <h4 className={styles.text}>Deployment.</h4>
        </li>
        {/* <li>
          <h4 className={styles.text}>.</h4>
        </li> */}
      </ul>
    </div>
  );
}
