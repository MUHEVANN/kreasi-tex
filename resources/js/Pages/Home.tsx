import Faq from "@/Components/Faq";
import Gmap from "@/Components/Gmap";
import ProductPreview from "@/Components/ProductPreview";
import Testimoni from "@/Components/Testimoni";
import ValuesSection from "@/Components/ValueSection";
import Layout from "@/Layouts/Layout";
function Home() {
    return (
        <Layout>
            <ValuesSection />
            <ProductPreview />
            <Faq />
            <Testimoni />
            <Gmap />
        </Layout>
    );
}

export default Home;
