import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";


const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display"
});

const wantedSans = localFont({
  src: [
    {
      path: "../../public/fonts/WantedSans-Regular.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/WantedSans-Medium.ttf",
      weight: "500",
      style: "medium"
    },
    {
      path: "../../public/fonts/WantedSans-SemiBold.ttf",
      weight: "600",
      style: "semibold"
    },
    {
      path: "../../public/fonts/WantedSans-Bold.ttf",
      weight: "700",
      style: "bold"
    }
  ],
  variable: "--font-wanted-sans"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${wantedSans.variable} ${dmSerif.variable}`}> 
      <body className="font-sans">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
