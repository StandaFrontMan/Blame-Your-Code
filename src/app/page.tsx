import { Metadata } from "next";
import { AppDiContainer } from "./di/AppDiContainer";
import { DiContainer } from "./di/DiContainer";

export const metadata: Metadata = {
  title: "Home",
};

export const diContainer: DiContainer = new AppDiContainer();

export default function Home() {
  return (
    <main className="mx-10">
      <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">
        Home Page
      </h1>
    </main>
  );
}
