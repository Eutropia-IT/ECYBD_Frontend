import ContactAddress from "@/components/ContactRoute/ContactAddress";
import ContactBanner from "@/components/ContactRoute/ContactBanner";
import ContactGoogleMap from "@/components/ContactRoute/ContactGoogleMap";
import RootLayout from "@/layouts/RootLayout";

export default function Contact() {
    return <div>
        <ContactBanner></ContactBanner>
        <ContactAddress></ContactAddress>
        <ContactGoogleMap></ContactGoogleMap>
    </div>
}

Contact.getLayout = (page) => {
    return <RootLayout>{page}</RootLayout>;
};