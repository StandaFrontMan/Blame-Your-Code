import { authConfig } from "@/app/configs/auth"
import { getServerSession } from "next-auth"

export default async function profilePage() {

    const session = await getServerSession( authConfig ); // получение данных о сессии в серверноп компоненте

    return (
        <main className="mx-10">
            <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">Profile Page</h1>
            <div className="px-2 py-2 mx-2 my-2 flex flex-col justify-center items-center bg-blue-200 rounded-lg">
                <div className="px-2 py-2 mx-2 my-1">
                    {session?.user?.image && <img className="w-32 h-32 rounded-full shadow-md" src={session?.user?.image} alt=""/>}
                </div>
                <div className="px-2 py-2 mx-2 my-1">
                    <h4 className="profileInfoElement">Name: {session?.user?.name}</h4>
                    <h4 className="profileInfoElement">Email: {session?.user?.email}</h4>
                </div>
            </div>
        </main>
    )
}