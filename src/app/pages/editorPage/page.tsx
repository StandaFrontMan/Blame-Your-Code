import ExtraLargeContainerContainer from "@/app/components/containers/extra_large_container/ExtraLargeContainer.container";
import HeaderView from "@/app/components/headers/side_bar/Header.view";
import PostFormSubmitionContanier from "@/app/modules/create_post/ui/PostFormSubmition.contanier";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editor",
};

export default function EditorPage() {
  return (
    <main className="mx-28">
      <HeaderView />

      <ExtraLargeContainerContainer>
        <PostFormSubmitionContanier />
      </ExtraLargeContainerContainer>
    </main>
  );
}
