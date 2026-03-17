import "./globals.css";

export const metadata = {
  title: "EasyShoppingMall",
  description: "Best deals every day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}