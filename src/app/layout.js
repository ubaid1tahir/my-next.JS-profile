import { Inter } from "next/font/google";
import Navbar from "../../components/Navbar";
import "./globals.css";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Home",
  description: "Explore my MERN Stack Portfolio for a showcase of dynamic web projects powered by MongoDB, Express.js, React, and Node.js. As a skilled MERN stack developer, I bring creativity and technical excellence to the forefront, ensuring an optimal user experience and enhanced SEO performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar name={'Muhammad Ubaid'} />
        {children}
      </body>
    </html>
  );
}
