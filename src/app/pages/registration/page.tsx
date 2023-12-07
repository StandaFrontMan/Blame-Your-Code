import LoaderContainer from "@/app/components/loader/Loader.contanier";
import { lazy, Suspense } from "react";

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
