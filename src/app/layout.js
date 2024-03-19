import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Rollins Codes",
  description: "Digital Crafters",
  verification: { google: "-AXuIRUPwMRxfwPmG0_CmnDNO_zz-MRJwPxyX53sIro" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen font-sans antialiased main-container", fontSans.variable)}>
        <div className="wrapper flex flex-col h-screen">
          {/* Navbar */}
          <Navbar />
          <main className="flex-1 flex flex-col flex-grow justify-center">{children}</main>
          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
