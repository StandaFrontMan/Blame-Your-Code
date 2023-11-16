import { User } from "../../domain/User";

type Props = {
  user: User | null | undefined;
};

export default function UserDataView(user: Props) {
  return (
    <>
      <div className="px-2 py-2 mx-2 my-1">{/* картинка */}</div>
      <div className="px-2 py-2 mx-2 my-1">
        <h4 className="profileInfoElement">Name: {user.user?.username}</h4>
        <h4 className="profileInfoElement">Email: {user.user?.email}</h4>
      </div>
    </>
  );
}
