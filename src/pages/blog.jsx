import RootLayout from "@/layouts/RootLayout";

export default function Blog() {
    return <div>
        <h1>this is blog</h1>
    </div>
}

Blog.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>;
};
