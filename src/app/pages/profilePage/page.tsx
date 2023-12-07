import { Metadata } from "next";
import HeaderView from "@/app/components/headers/side_bar/Header.view";
import LargeContainerContainer from "@/app/components/containers/large_container/LargeContainer.container";
import { lazy } from "react";
import { Suspense } from "react";
import LoaderContainer from "@/app/components/loader/Loader.contanier";

const LazyUserDataContainer = lazy(
  () => import("@/app/modules/profile/ui/user_data/UserData.container")
);

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
        <Suspense fallback={<LoaderContainer />}>
          <LazyUserDataContainer />
        </Suspense>
      </LargeContainerContainer>
    </main>
  );
}
