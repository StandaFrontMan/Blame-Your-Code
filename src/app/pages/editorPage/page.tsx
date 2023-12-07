import { Metadata } from "next";
import ExtraLargeContainerContainer from "@/app/components/containers/extra_large_container/ExtraLargeContainer.container";
import HeaderView from "@/app/components/headers/side_bar/Header.view";
import { lazy } from "react";
import { Suspense } from "react";
import LoaderContainer from "@/app/components/loader/Loader.contanier";

const LazyPostFormSubmitionContanier = lazy(
  () => import("@/app/modules/create_post/ui/PostFormSubmition.contanier")
);

export const metadata: Metadata = {
  title: "Editor",
};

export default function EditorPage() {
  return (
    <main className="mx-28">
      <HeaderView />

      <ExtraLargeContainerContainer>
        <Suspense fallback={<LoaderContainer />}>
          <LazyPostFormSubmitionContanier />
        </Suspense>
      </ExtraLargeContainerContainer>
    </main>
  );
}
