import ProductPreview from "@/Components/ProductPreview";
import ValuesSection from "@/Components/ValueSection";
import Layout from "@/Layouts/Layout";
import React from "react";
function Home() {
    return (
        <Layout>
            <ValuesSection />
            <ProductPreview />
        </Layout>
    );
}

export default Home;
