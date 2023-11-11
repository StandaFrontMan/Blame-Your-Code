import CredentialsAuthForm from "@/app/components/authtorization/CredentialsAuthForm";
import GoogleAuthButton from "@/app/components/authtorization/GoogleAuthButton";
import CredentialsAuthFormContainer from "@/app/components/authtorization/credentials_auth_form/CredentialsAuthForm.container";
import CredentialsAuthFormView from "@/app/components/authtorization/credentials_auth_form/CredentialsAuthForm.view";

export default async function AuthPage() {
  return (
    <main className="mx-10">
      <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">
        Sign In
      </h1>
      <div className="px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center bg-blue-200 rounded-lg">
        <GoogleAuthButton />
        <div className="mx-2 my-2 text-xl">or</div>
        <CredentialsAuthFormContainer />
      </div>
    </main>
  );
}
