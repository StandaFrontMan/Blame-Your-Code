import { UserEntity } from "../../../domain/UserEntity";
import styles from "../ChangeField.module.scss";

type Props = {
  curUserData: UserEntity | null | undefined;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
};

export default function UsernameChangeFieldview({
  curUserData,
  handleChange,
  handleSubmit,
}: Props) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>Change UserName</h2>
      </div>

      <div className={styles.inputBlock}>
        <p className="my-2 text-md text-white">
          Current Username: {curUserData?.username}
        </p>

        <input
          className={styles.input}
          placeholder="New UserName..."
          type="text"
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.buttonBlock}>
        <button className={styles.button}>Submit</button>
      </div>
    </form>
  );
}
