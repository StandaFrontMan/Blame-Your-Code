import { Metadata } from "next";
import LoaderContainer from "@/app/components/loader/Loader.contanier";
import { lazy, Suspense } from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Sign Up",
  };
}

const LazyRegistrationFormContainer = lazy(
  () =>
    import("@/app/modules/sign_up/ui/sign_up_form/RegistrationForm.container")
);

export default async function Regisration() {
  return (
    <Suspense fallback={<LoaderContainer />}>
      <main className="mx-10">
        <LazyRegistrationFormContainer />
      </main>
    </Suspense>
  );
}
