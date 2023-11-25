import Header from "@/components/shared/header/Header";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Footer from "@/components/shared/footer/Footer";
import QueryProvider from "@/providers/QueryProvider";

import ScrollTop from "@/components/shared/ScrollTop";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

export const metadata = {
  title: "Episcopal Commission for Youth",
  description:
    "The youth apostolate of the Catholic Bishops’ Conference of Bangladesh (CBCB) was officially launched in 1977, under the name “Catholic Jubo Sebadol” and later on officially, Episcopal Commission for Youth (ECY). Its function was to direct and coordinate the various youth activities and to assist the formation of the youth and the students.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <div className="pt-[104px] md:pt-[104px]">
          <QueryProvider>{children}</QueryProvider>
        </div>
        <ScrollTop />
        <Footer />
      </body>
    </html>
  );
}
