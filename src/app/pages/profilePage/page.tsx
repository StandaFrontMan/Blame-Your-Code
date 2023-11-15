import UserDataContainer from "@/app/modules/profile/ui/user_data/UserData.container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Profile",
  };
}

export default async function profilePage() {
  return (
    <main className="mx-10">
      <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">
        Profile Page
      </h1>
      <div className="px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center bg-blue-200 rounded-lg">
        <UserDataContainer />
      </div>
    </main>
  );
}
