import Header from "@/components/header";
import "@/styles/app.css";
import { Metadata } from "next";

interface IProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "VESTIQUE",
  description: "With Vestique, you can express your unique style and make a statement with your fashion choices.",
  manifest: "/meta/manifest.json",
  icons: { icon: "/meta/favicon.ico", apple: "/meta/apple-touch-icon.png" }
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
