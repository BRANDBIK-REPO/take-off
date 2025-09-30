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
      path: "../../public/fonts/WantedSans-Regular-BF65baf13579965.otf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../../public/fonts/WantedSans-Medium-BF65baf1388963b.otf",
      weight: "500",
      style: "medium"
    },
    {
      path: "../../public/fonts/WantedSans-SemiBold-BF65baf13722853.otf",
      weight: "600",
      style: "semibold"
    },
    {
      path: "../../public/fonts/WantedSans-Bold-BF65baf135d5a25.otf",
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
