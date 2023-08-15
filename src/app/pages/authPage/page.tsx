import CredentialsAuthForm from "@/app/components/Authtorization/CredentialsAuthForm";
import GoogleAuthButton from "@/app/components/Authtorization/GoogleAuthButton";

export default async function AuthPage() {
    return (
        <main className="container">
            <div className="stack">
                <h1>Sign In</h1>
                <GoogleAuthButton />
                <CredentialsAuthForm />
            </div>
        </main>
    )
}