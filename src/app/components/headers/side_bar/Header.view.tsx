import Link from "next/link";

import { AiFillHome } from "@react-icons/all-files/ai/AiFillHome";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { AiOutlineCode } from "@react-icons/all-files/ai/AiOutlineCode";

export default function HeaderView() {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0
                 flex flex-col
                 bg-gray-900 text-white shadow-lg"
    >
      <i
        className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto  
      bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
      text-green-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg"
      >
        <Link href="/">
          <AiFillHome size="28" />
        </Link>
      </i>

      <i
        className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto  
      bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
      text-green-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg"
      >
        <Link href="/pages/aboutPage">
          <AiOutlineSearch size="28" />
        </Link>
      </i>

      <i
        className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto  
      bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
      text-green-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg"
      >
        <Link href="/pages/editorPage">
          <AiOutlineCode size="28" />
        </Link>
      </i>
      <i
        className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto  
      bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
      text-green-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg"
      >
        <Link href="/">
          <AiFillHome size="28" />
        </Link>
      </i>
      <i
        className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto  
      bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
      text-green-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg"
      >
        <Link href="/">
          <AiFillHome size="28" />
        </Link>
      </i>
    </div>
  );
}
