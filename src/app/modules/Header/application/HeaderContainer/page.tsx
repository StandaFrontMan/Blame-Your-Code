import Link from "next/link";
import HeaderAuthSection from "../HeaderAuthSection/HeaderAuthSection";
import { ISession } from "../Isession";

export default function HeaderContainer() {
    return (
        <nav className="px-2">
            <div className="flex">
                <ul className="linksList">

                     <li className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150"> {/* стили для ссылок */}
                        <Link href='/'>Home</Link>
                    </li>

                    <li className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150">
                        <Link href='/pages/aboutPage'>About</Link>
                    </li>

                    <li className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150">
                        <Link href='/pages/editorPage'>Editor</Link>
                    </li>

                </ul>

                <HeaderAuthSection />

            </div>            
        </nav>
    )
}