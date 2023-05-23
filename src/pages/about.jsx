import AboutBanner from "@/components/AboutRoute/AboutBanner";
import AboutBody from "@/components/AboutRoute/AboutBody";
import AboutOurTeam from "@/components/AboutRoute/AboutOurTeam";
import RootLayout from "@/layouts/RootLayout";

export default function About(){
    return <>
        <AboutBanner></AboutBanner>
        <AboutBody></AboutBody>
        <AboutOurTeam></AboutOurTeam>
    </>
}

About.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>
  };
  