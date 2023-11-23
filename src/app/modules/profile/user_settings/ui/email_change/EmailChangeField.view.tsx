import { UserEntity } from "../../domain/UserEntity";

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
    <form onSubmit={handleSubmit}>
      <div>
        <h2>You can change Email here</h2>
      </div>

      <div>
        <p>Current Email: {curUserData?.email}</p>

        <input type="text" onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  );
}
