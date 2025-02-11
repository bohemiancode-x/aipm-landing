import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmsans = DM_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'], 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-dmsans'
});

export const metadata = {
  title: "AIPM",
  description: "The Artificial Intelligence Product Management School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmsans.className}>{children}</body>
    </html>
  );
}
