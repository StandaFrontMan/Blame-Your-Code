import GoogleAuthButton from "@/app/components/authtorization/GoogleAuthButton";
import CredentialsAuthFormContainer from "@/app/components/authtorization/credentials_auth_form/CredentialsAuthForm.container";
import ModalContainer from "@/app/components/common/modal/Modal.container";
import SignInFormContainer from "@/app/modules/sign_in/ui/sign_in_form/SignInForm.container";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Auth",
  };
}

export default async function AuthPage() {
  return (
    <main className="mx-10">
      <SignInFormContainer />
    </main>
  );
}
