import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Density assignment",
  description: "Density is an Frontend UI Intern Task ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
          // added this line of code to prevent scroll should always on top
        />
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
