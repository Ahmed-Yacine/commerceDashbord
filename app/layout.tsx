import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/navigation/navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import  Sidebar  from "@/components/navigation/sidebar";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  style:['normal', 'italic']
});

export const metadata: Metadata = {
  title: "Next Dashboard",
  description: "E-commerce Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider 
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange 
        >
          <Navbar/>
        <main className="flex justify-between">
          <Sidebar/>
          <section className="min-h-screen flex-1"> 
          {children}
          </section>
        </main>
        </ThemeProvider>
        </body>
    </html>
  );
}
