import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Configuração da fonte Geist Sans
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configuração da fonte Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Configuração da fonte Nunito
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"], 
  style: ["normal", "italic"], 
});

// Configuração da fonte Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"], 
});

export const metadata: Metadata = {
  title: "Monzy",
  description: "- Currency Made Cuter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link rel="icon" href="../favicon.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}