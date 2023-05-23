import SingleBanner from "@/components/SingleRoute/SingleBanner";
import SingleBlogBody from "@/components/SingleRoute/SingleBlogBody";
import RootLayout from "@/layouts/RootLayout";

export default function Single() {
    return <div>
        <SingleBanner></SingleBanner>
        <SingleBlogBody></SingleBlogBody>
    </div>
}

Single.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>;
  };
  