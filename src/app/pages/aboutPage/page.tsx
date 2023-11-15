import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-10">
      <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">
        About Page
      </h1>
    </main>
  );
}
