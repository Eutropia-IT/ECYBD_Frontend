import AboutBanner from "@/components/AboutRoute/AboutBanner";
import AboutBody from "@/components/AboutRoute/AboutBody";
import AboutOurTeam from "@/components/AboutRoute/AboutOurTeam";
import RootLayout from "@/layouts/RootLayout";

export default function Abouts(){
    return <>
        <AboutBanner></AboutBanner>
        <AboutBody></AboutBody>
        <AboutOurTeam></AboutOurTeam>
    </>
}

Abouts.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>
  };
  