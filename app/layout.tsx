import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import SmoothScroll from "@/components/common/SmoothScroll";

export const metadata: Metadata = {
  title: "Ganesh Tamaran | Full Stack Developer",
  description: "Portfolio of Ganesh T, a Full Stack Developer building scalable applications and thoughtful interfaces.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#BEB7A4] text-[#000000] dark:bg-[#000000] dark:text-[#FFFFFC] transition-colors duration-500 antialiased selection:bg-[#FF7F11] selection:text-black">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
