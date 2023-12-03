import Link from "next/link";
import { User } from "../../domain/User";
import styles from "./UserData.module.scss";
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";

type Props = {
  user: User | null | undefined;
};

export default function UserDataView(user: Props) {
  return (
    <div className="flex-auto text-center my-5 px-5">
      <h2 className="text-2xl font-medium text-green-500 px-2 my-2">Profile</h2>

      <div className="my-2 bg-gray-900 rounded-xl">
        <div className={styles.contanier}>
          <div className={styles.photoContanier}>
            <img
              className={styles.photo}
              src="https://vet-centre.by/wp-content/uploads/2016/11/kot-eti-udivitelnye-kotiki.jpg"
              alt="#"
            />
          </div>
          <div className={styles.infoBlock}>
            <h4 className={styles.profileInfoElement}>
              Name: {user.user?.username}
            </h4>
            <h4 className={styles.profileInfoElement}>
              Email: {user.user?.email}
            </h4>
          </div>
        </div>

        <div className={styles.linkToSettings}>
          <i
            className="relative flex items-center justify-center 
        h-8 w-8 mt-2 mb-2 mx-auto  
      bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
      text-green-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg"
          >
            <Link href="/pages/profilePage/userSettings">
              <AiFillSetting size="18" />
            </Link>
          </i>
        </div>
      </div>
    </div>
  );
}
