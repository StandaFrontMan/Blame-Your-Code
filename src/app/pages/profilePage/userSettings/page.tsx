import { Metadata } from "next";
import ExtraLargeContainerContainer from "@/app/components/containers/extra_large_container/ExtraLargeContainer.container";
import HeaderView from "@/app/components/headers/side_bar/Header.view";
import { lazy } from "react";
import { Suspense } from "react";
import LoaderContainer from "@/app/components/loader/Loader.contanier";

const LazyChangeDataFormView = lazy(
  () =>
    import(
      "@/app/modules/profile/user_settings/ui/user_information/ChangeDataForm.view"
    )
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "UserSettings",
  };
}

export default async function UserSettings() {
  return (
    <main className="mx-28">
      <HeaderView />

      <ExtraLargeContainerContainer>
        <Suspense fallback={<LoaderContainer />}>
          <LazyChangeDataFormView />
        </Suspense>
      </ExtraLargeContainerContainer>
    </main>
  );
}
