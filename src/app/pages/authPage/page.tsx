import GoogleAuthButton from "@/app/components/Authtorization/GoogleAuthButton";

export default async function AuthPage() {
    return (
        <div>
            <h1>Sign In</h1>
            <GoogleAuthButton />
        </div>
    )
}