import { Inter } from "next/font/google";
import "./assets/css/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login Panel",
  description: "Egyszerű bejelentkezési és felhasználói felület next.js használatával",
};

export default function RootLayout({ children }) {
  return (
    <html lang="hu">
      <body className={inter.className}>{children}</body>
    </html>
  );
}