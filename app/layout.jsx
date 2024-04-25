import Link from "next/link";
import {Jersey_10} from "next/font/google"
export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
 const roboto = Jersey_10({
   weight: "400",
   subsets: ["latin"],
 })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className} >
        <nav>
          <h1>Navbar</h1>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/tienda">tienda</Link>
            </li>
          </ul>
        </nav>
        
        {children}</body>
    </html>
  );
}
