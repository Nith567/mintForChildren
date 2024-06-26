import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Footer from "@/components/footer";
import Head from "next/head";
import { Providers } from "./providers";
import ogImage from "../../public/og.jpg";
// const ibm = IBM_Plex_Mono({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  openGraph: {
    title: "For The Children 2024: Shaolin Art Center",
    description:
      "7 Days of Open Edition Mints & Auctions supporting For The Children - by TheCreators.com & Members of Wu-Tang Clan",
    url: "https://mint-forchildren.vercel.app/",
    siteName: "For The Children 2024: Shaolin Art Center",
    images: [
      {
        url: "https://res.cloudinary.com/djwhxlpk5/image/upload/v1718286114/mint-forthechildren/ogImage.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  title: "For The Children 2024: Shaolin Art Center",
  generator: "Next.js",
  description:
    "7 Days of Open Edition Mints & Auctions supporting For The Children - by TheCreators.com & Members of Wu-Tang Clan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <meta property="og:image" content="/og.jpg" />
        </Head>
        <body className={inter.className + " bg-[--blue] text-white"}>
          <div className="lg:hidden block">
            <Image
              src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
              alt="shield"
              height={140}
              width={140}
              className="fixed top-6 left-6 z-[2000]"
            />
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://cdn.prod.website-files.com/666246aaeddc718e33bdf357/66624b920dbacd682221c71c_shaolin%20art%20center%20mark.svg"
              alt="shield"
              height={205}
              width={205}
              className="fixed top-6 left-6 z-[2000]"
            />
          </div>
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
