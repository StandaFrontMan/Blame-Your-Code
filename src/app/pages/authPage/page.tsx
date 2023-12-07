import LoaderContanier from "@/app/components/loader/Loader.contanier";
import { Metadata } from "next";
import { lazy, Suspense } from "react";

const LazySignInFormContainer = lazy(
  () => import("@/app/modules/sign_in/ui/sign_in_form/SignInForm.container")
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Auth",
  };
}

export default async function AuthPage() {
  return (
    <main className="mx-10">
      <Suspense fallback={<LoaderContanier />}>
        <LazySignInFormContainer />
      </Suspense>
    </main>
  );
}
