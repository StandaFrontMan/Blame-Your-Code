import ExtraLargeContainerContainer from "@/app/components/containers/extra_large_container/ExtraLargeContainer.container";
import LargeContainerContainer from "@/app/components/containers/large_container/LargeContainer.container";
import HeaderView from "@/app/components/headers/side_bar/Header.view";
import UserDataContainer from "@/app/modules/profile/ui/user_data/UserData.container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Profile",
  };
}

export default async function profilePage() {
  return (
    <main className="mx-28">
      <HeaderView />

      <LargeContainerContainer>
        <UserDataContainer />
      </LargeContainerContainer>
    </main>
  );
}
