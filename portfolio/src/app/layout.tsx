import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VantaBackground from "@/components/Vantabackground";
import { Inter, Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import { ToastContainer } from "react-toastify";
import { ProjectProvider } from "@/context/ProjectContext";
import { ModalProvider } from "@/context/ModalContext";

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
    <html lang="es">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ProjectProvider>
        <ModalProvider>
        <VantaBackground>
          <div className="flex min-h-screen justify-center px-6 font-sans md:px-12">
            <div className="flex w-full max-w-screen-xl lg:gap-4 lg:flex-row flex-col">
              <Sidebar />
              {children}
              <ToastContainer position="bottom-right" />
            </div>
          </div>
        </VantaBackground>
        </ModalProvider>
        </ProjectProvider>
      </body>
    </html>
  );
}
