import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/Floating";
import { Providers } from "./provider";
import ThemeSwitch from "@/components/Theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Utkarsh Raj Srivastava",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`} >
        <Providers>
          <FloatingNav navItems={[]}/>
          <div className="bg-[#fbe2e3] absolute top-[-8rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full  sm:w-[68.75rem] dark:bg-[#df825f] blur-[10rem]"></div>
          <div 
          className="bg-[#dbd7fb] absolute top-[1rem] -z-10 left-[10rem] h-[31.25rem] w-[50rem] rounded-full sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#706695] blur-[10rem]"
          ></div>
          {children}
          <ThemeSwitch/>
        </Providers>
      </body>
    </html>
  );
}

// blur-[200px]
// blur-[250px] 
