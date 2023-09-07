import RegistrationForm from "@/app/components/Registration/RegistrationForm";

export default function Regisration() {
    return (
        <main className="mx-10">
            <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">Registration Page</h1>
            <div className="px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center bg-blue-200 rounded-lg">
                <RegistrationForm />
            </div>
        </main>
    )
}