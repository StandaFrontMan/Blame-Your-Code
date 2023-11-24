import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "./components/SessionProvider/Provider";
import { useRouter } from "next/router";
import HeaderContainer from "./components/headers/side_bar/Header.container";
import HeaderView from "./components/headers/side_bar/Header.view";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
