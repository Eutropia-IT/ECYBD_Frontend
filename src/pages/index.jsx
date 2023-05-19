import About from "@/components/AboutUS/About";
import Banner from "@/components/Banner/Banner";
import Quotes from "@/components/BibleQuotes/Quotes";
import Communication from "@/components/Communication/Communication";
import Mission from "@/components/Mission&Vision/M&V";
import Objective from "@/components/Objective/Objective";
import RootLayout from "@/layouts/RootLayout";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Quotes></Quotes>
      <About></About>
      <Mission></Mission>
      <Objective></Objective>
      <Communication></Communication>
    </div>
  );
}

Home.getLayout = (page) => {
  return <RootLayout>{page}</RootLayout>;
};
