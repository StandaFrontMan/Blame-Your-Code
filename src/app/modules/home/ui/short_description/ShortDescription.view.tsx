import Link from "next/link";

export default function ShortDescriptionView() {
  return (
    <div className="flex-col text-center">
      <h1 className="bg-gradient-to-r from-orange-400 via-pink-500 to-gray-950 bg-[position:_0%_0%] text-transparent bg-clip-text hover:bg-[position:_200%_50%] bg-[size:_200%] transition-all duration-500">
        <span className="text-6xl">Refine your coding process</span>
        <br />
        <span className="text-6xl">at</span>
        <br />
        <span className="text-6xl ">Blame Your Code</span>
      </h1>
      <div className="mt-4">
        <p className="text-2xl">
          A platform where every line of code is an opportunity for growth.
          Submit your work, embrace constructive critiques, and elevate your
          skills through collaborative code reviews.
        </p>
      </div>
      <button className="w-1/4 p-2 my-4 justify-center bg-black text-white rounded-lg hover:bg-sky-700 transition-all duration-500">
        <Link href="/pages/registration">Start blaming!</Link>
      </button>
    </div>
  );
}
