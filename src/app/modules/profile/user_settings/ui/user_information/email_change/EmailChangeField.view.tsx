import { UserEntity } from "../../../domain/UserEntity";
import styles from "../ChangeField.module.scss";
type Props = {
  curUserData: UserEntity | null | undefined;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
};

export default function EmailChangeFieldView({
  curUserData,
  handleChange,
  handleSubmit,
}: Props) {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.titleBlock}>
        <h2 className={styles.title}>Change Email</h2>
      </div>

      <div className={styles.inputBlock}>
        <p className="my-2 text-md text-white">
          Current Email: {curUserData?.email}
        </p>

        <input
          className={styles.input}
          placeholder="New Email..."
          type="email"
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
