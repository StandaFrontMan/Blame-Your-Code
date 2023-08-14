import Link from "next/link"
import { ISession } from "../Isession"


export default function HeaderAuthSection({ session }: ISession) {
    return (
        <div className="authContainer">
            <ul className="linksList">
            {
                session?.user && (
                    <li className="listElement">
                        <Link href='/pages/profilePage'>Profile</Link>
                    </li>
                )
            }
            </ul>
        </div>
    )
}