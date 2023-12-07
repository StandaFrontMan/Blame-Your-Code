"use client";

import { Metadata } from "next";
import { Suspense } from "react";
import React, { lazy } from "react";
import HomeHeaderContainer from "./components/headers/header_on_home_page/HomeHeader.container";
import LoaderView from "./components/loader/Loader.view";
import LargeContainerContainer from "./components/containers/large_container/LargeContainer.container";

const LazyNewsContainerContainer = lazy(
  () =>
    import(
      "./components/home_page_elements/news_container/NewsContainer.container"
    )
);
const LazyFirstFrontNewsView = lazy(
  () =>
    import(
      "./components/home_page_elements/news_container/news_mocks/FirstFrontNews.view"
    )
);
const LazyFirstBackNewsView = lazy(
  () =>
    import(
      "./components/home_page_elements/news_container/news_mocks/FirstBackNews.view"
    )
);
const LazyShortDescriptionView = lazy(
  () => import("./modules/home/ui/short_description/ShortDescription.view")
);

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="mx-10">
      <HomeHeaderContainer />
      <LargeContainerContainer>
        <Suspense fallback={<LoaderView />}>
          <LazyShortDescriptionView />
        </Suspense>
      </LargeContainerContainer>
      <LargeContainerContainer>
        <Suspense fallback={<LoaderView />}>
          <LazyNewsContainerContainer date="22.11.23">
            <LazyFirstFrontNewsView />
            <LazyFirstBackNewsView />
          </LazyNewsContainerContainer>
        </Suspense>
      </LargeContainerContainer>
    </main>
  );
}
