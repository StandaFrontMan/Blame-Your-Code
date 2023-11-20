"use client";

import { Metadata } from "next";
import React from "react";
import HeaderView from "./modules/Header/application/HeaderView/page";
import HomeHeaderContainer from "./components/headers/header_on_home_page/HomeHeader.container";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="mx-10">
      <HomeHeaderContainer />
      <h1 className="px-2 py-2 mx-2 my-2 text-3xl flex items-center justify-center">
        Home Page
      </h1>
    </main>
  );
}
