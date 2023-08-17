import Link from "next/link"
import { ISession } from "../Isession"
import SignOutButton from "@/app/components/Header/SignOutButton"
import SignInButton from "@/app/components/Header/SignInButton"


export default function HeaderAuthSection({ session }: ISession) {
    return (
        <div className="ml-auto">
            <div className="linksContanier">
                <ul className="linksList">
                {
                    session?.user && (
                        <li
                            className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150"
                        >
                            <Link href='/pages/profilePage'>Profile</Link>
                        </li>
                    )
                }
                {
                    session?.user ? (
                        <SignOutButton />
                    ) : (
                        <SignInButton />
                    )
                }
                </ul>
            </div>
        </div>
    )
}