import Link from "next/link"
import { ISession } from "../Isession"
import SignOutButton from "@/app/components/Header/SignOutButton"
import SignInButton from "@/app/components/Header/SignInButton"


export default function HeaderAuthSection({ session }: ISession) {
    return (
        <div className="authContainer">
            <div className="linksContanier">
                <ul className="linksList">
                {
                    session?.user && (
                        <li className="listElement">
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