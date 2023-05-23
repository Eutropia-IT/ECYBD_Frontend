import BlogBanner from "@/components/BlogRoute/BlogBanner";
import BlogBody from "@/components/BlogRoute/BlogBody";
import RootLayout from "@/layouts/RootLayout";

export default function Blog() {
    return <div>
        <BlogBanner></BlogBanner>
        <BlogBody></BlogBody>
    </div>
}

Blog.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>;
};
