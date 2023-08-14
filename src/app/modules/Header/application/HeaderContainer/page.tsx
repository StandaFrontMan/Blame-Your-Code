import Link from "next/link";
import HeaderAuthSection from "../HeaderAuthSection/HeaderAuthSection";
import { ISession } from "../Isession";

export default function HeaderContainer({ session }: ISession) {
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

            <HeaderAuthSection session={session}/>
            
        </nav>
    )
}