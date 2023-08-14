"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Header() {

    const session = useSession()

    console.log(session);

    return (
        <nav className="headerContainer">
            <div className="linksContainer">
                <ul className="linksList">

                    <li className="listElement">
                        <Link href='/'>Home</Link>
                    </li>

                    <li className="listElement">
                        <Link href='/pages/aboutPage'>About</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}