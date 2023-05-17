import Banner from "@/component/Banner"
import RootLayout from "@/layouts/RootLayout"

export default function Home() {
    
    return <div>
        <Banner></Banner>
    </div>
}

Home.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>
}