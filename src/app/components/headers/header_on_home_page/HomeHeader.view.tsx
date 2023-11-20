import Link from "next/link";

export default function HomeHeaderView() {
  return (
    <nav className="px-2">
      <div className="flex">
        <h3 className="inline-block py-3 px-2 border-b-2 border-transparent ">
          Blame Your Code
        </h3>

        <ul className="ml-auto">
          <li className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150">
            <Link href="/pages/authPage">Sign In</Link>
          </li>

          <li className="inline-block py-3 px-2 border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 duration-150">
            <Link href="/pages/registration">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
