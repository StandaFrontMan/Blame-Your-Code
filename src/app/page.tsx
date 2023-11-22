"use client";

import { Metadata } from "next";
import React from "react";
import HomeHeaderContainer from "./components/headers/header_on_home_page/HomeHeader.container";
import MediumContainerContainer from "./components/containers/medium_container/MediumContainer.container";
import SmallContainerContainer from "./components/containers/small_container/SmallContainer.container";
import LargeContainerContainer from "./components/containers/large_container/LargeContainer.container";

import ShortDescriptionView from "./modules/home/ui/short_description/ShortDescription.view";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="mx-10">
      <HomeHeaderContainer />

      <LargeContainerContainer>
        <ShortDescriptionView />
      </LargeContainerContainer>
    </main>
  );
}
