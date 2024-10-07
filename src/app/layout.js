/* import { Inter } from "next/font/google"; */
import "./globals.css";

/* const inter = Inter({ subsets: ["latin"] }); */

export const metadata = {
  title: "Puppy's Nutrition",
  description: "Mejor salud para tu mascota",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
