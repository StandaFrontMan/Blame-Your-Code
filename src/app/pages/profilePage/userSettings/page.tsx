import HeaderView from "@/app/components/headers/side_bar/Header.view";
import ChangeDataFormView from "@/app/modules/profile/user_settings/ui/ChangeDataForm.view";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "UserSettings",
  };
}

export default async function UserSettings() {
  return (
    <main className="mx-10">
      {/* <HeaderView /> */}

      <ChangeDataFormView />
    </main>
  );
}
