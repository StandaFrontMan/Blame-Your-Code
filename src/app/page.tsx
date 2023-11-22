"use client";

import { Metadata } from "next";
import React from "react";
import HomeHeaderContainer from "./components/headers/header_on_home_page/HomeHeader.container";
import MediumContainerContainer from "./components/containers/medium_container/MediumContainer.container";
import SmallContainerContainer from "./components/containers/small_container/SmallContainer.container";
import LargeContainerContainer from "./components/containers/large_container/LargeContainer.container";

import ShortDescriptionView from "./modules/home/ui/short_description/ShortDescription.view";
import ExtraLargeContainerContainer from "./components/containers/extra_large_container/ExtraLargeContainer.container";
import NewsContainerContainer from "./components/home_page_elements/news_container/NewsContainer.container";
import FirstFrontNewsView from "./components/home_page_elements/news_container/news_mocks/FirstFrontNews.view";
import FirstBackNewsView from "./components/home_page_elements/news_container/news_mocks/FirstBackNews.view";
import HeaderView from "./components/headers/side_bar/Header.view";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="mx-10">
      <HomeHeaderContainer />

      {/* <HeaderView /> */}

      <LargeContainerContainer>
        <ShortDescriptionView />
      </LargeContainerContainer>

      <LargeContainerContainer>
        <NewsContainerContainer date="22.11.23">
          <FirstFrontNewsView />
          <FirstBackNewsView />
        </NewsContainerContainer>
      </LargeContainerContainer>
    </main>
  );
}
