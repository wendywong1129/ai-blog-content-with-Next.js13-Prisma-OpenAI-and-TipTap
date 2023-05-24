import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "app/(shared)/Navbar";
import Footer from "app/(shared)/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "AI Blog Content",
  description: "Blog built in Next JS that uses AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
