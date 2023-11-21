"use client";

import { Metadata } from "next";
import React from "react";
import HomeHeaderContainer from "./components/headers/header_on_home_page/HomeHeader.container";
import MediumContainerContainer from "./components/containers/medium_container/MediumContainer.container";
import SmallContainerContainer from "./components/containers/small_container/SmallContainer.container";
import LargeContainerContainer from "./components/containers/large_container/LargeContainer.container";
import ExtraLargeContainerContainer from "./components/containers/extra_large_container/ExtraLargeContainer.container";

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
      <ExtraLargeContainerContainer></ExtraLargeContainerContainer>
      <LargeContainerContainer></LargeContainerContainer>
      <MediumContainerContainer></MediumContainerContainer>
      <SmallContainerContainer></SmallContainerContainer>
    </main>
  );
}
