import Navbar from "./components/Navbar";
import "./globals.css";
import { CartProvider } from "./components/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="pt-16">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
