import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VantaBackground from "@/components/Vantabackground";
import Header from "@/components/Header";
import { Inter, Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Ehizer",
  description: "Portafolio de programador Full-Stack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <VantaBackground>
          <div className="flex min-h-screen justify-center px-6 font-sans md:px-12">
            <div className="flex w-full max-w-screen-xl lg:gap-4 lg:flex-row flex-col">
              <Sidebar />
              {children}
              <ToastContainer position="bottom-right" />
            </div>
          </div>
        </VantaBackground>
      </body>
    </html>
  );
}
