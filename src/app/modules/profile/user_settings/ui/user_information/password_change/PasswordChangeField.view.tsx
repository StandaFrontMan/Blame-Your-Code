import { UserEntity } from "../../../domain/UserEntity";

type Props = {
  curUserData: UserEntity | null | undefined;
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
};

export default function PasswordChangeFieldView({
  curUserData,
  handleChange,
  handleSubmit,
}: Props) {
  return (
    // <form onSubmit={handleSubmit}>
    //   <div>
    //     <h2>You can change Password here</h2>
    //   </div>

    //   <div>
    //     <p>Current Password: {}</p>

    //     <input type="password" onChange={handleChange} />
    //   </div>
    //   <button>Submit</button>
    // </form>

    <div className="text-center p-4 m-4">IN PROCESS</div>
  );
}
