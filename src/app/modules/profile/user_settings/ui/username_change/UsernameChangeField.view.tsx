import { UserEntity } from "../../domain/UserEntity";

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
    <form onSubmit={handleSubmit}>
      <div>
        <h2>You can change UserName here</h2>
      </div>

      <div>
        <p>Current Username: {curUserData?.username}</p>

        <input type="text" onChange={handleChange} />
      </div>
      <button>Submit</button>
    </form>
  );
}
