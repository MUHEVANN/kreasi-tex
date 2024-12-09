import Footer from "@/Components/Footer";
import HeroLogo from "@/Components/HeroLogo";
import Layout from "@/Layouts/Layout";
import React, { useState } from "react";

const MaterialInfo = () => {
    const [titleDesc, setTitleDesc] = useState("Polyester");
    const [desc, setDesc] = useState(
        "Polyester adalah bahan sintetis yang terbuat dari serat buatan yang dihasilkan dari polimer. Bahan ini dikenal karena ketahanan dan kekuatannya terhadap kerutan, sehingga sangat cocok untuk pakaian sehari-hari yang memerlukan perawatan rendah. Selain itu, polyester memiliki sifat cepat kering, menjadikannya pilihan utama untuk pakaian olahraga dan aktivitas luar ruangan. Namun, karena sifatnya yang kurang bernapas dibandingkan dengan bahan alami, polyester sering dicampur dengan kain lain untuk meningkatkan kenyamanan. Dalam dunia tekstil, polyester juga banyak digunakan untuk produk seperti tirai, kain pelapis, dan bahkan tas."
    );
    const [activeButton, setActiveButton] = useState(0);

    const data = [
        {
            bahan: "Polyester",
            deskripsi:
                "Polyester adalah bahan sintetis yang terbuat dari serat buatan yang dihasilkan dari polimer. Bahan ini dikenal karena ketahanan dan kekuatannya terhadap kerutan, sehingga sangat cocok untuk pakaian sehari-hari yang memerlukan perawatan rendah. Selain itu, polyester memiliki sifat cepat kering, menjadikannya pilihan utama untuk pakaian olahraga dan aktivitas luar ruangan. Namun, karena sifatnya yang kurang bernapas dibandingkan dengan bahan alami, polyester sering dicampur dengan kain lain untuk meningkatkan kenyamanan. Dalam dunia tekstil, polyester juga banyak digunakan untuk produk seperti tirai, kain pelapis, dan bahkan tas.",
        },
        {
            bahan: "CVC / Katun Lokal",
            deskripsi:
                "CVC (Chief Value Cotton) adalah jenis kain campuran yang menggabungkan serat katun alami dengan serat poliester. Dengan kandungan katun yang lebih dominan, CVC menawarkan keseimbangan antara kenyamanan dan daya tahan. Katun lokal yang digunakan biasanya lebih lembut, nyaman di kulit, dan memiliki kemampuan menyerap keringat yang baik, sehingga sangat cocok untuk iklim tropis seperti di Indonesia. Kombinasi ini membuat CVC tahan lama, tidak mudah melar, dan mudah dirawat. Bahan ini sering digunakan untuk pakaian kasual seperti kaos, seragam, dan pakaian sehari-hari yang memerlukan kenyamanan dan kepraktisan.",
        },
        {
            bahan: "Full Cotton",
            deskripsi:
                "Full Cotton adalah bahan yang terbuat dari 100% serat katun alami tanpa campuran sintetis. Kain ini dikenal karena kelembutannya yang sangat nyaman di kulit dan kemampuannya menyerap keringat dengan baik, membuatnya ideal untuk cuaca panas dan lembap. Full Cotton juga memiliki sifat hipoalergenik, yang berarti tidak menyebabkan iritasi pada kulit sensitif. Namun, bahan ini cenderung lebih mudah kusut dan membutuhkan perawatan ekstra seperti penyetrikaan. Karena sifatnya yang ramah lingkungan dan biodegradable, katun sepenuhnya juga menjadi pilihan bagi mereka yang peduli terhadap dampak lingkungan.",
        },
        {
            bahan: "Tencel",
            deskripsi:
                "Tencel adalah bahan modern yang dihasilkan dari serat kayu seperti eukaliptus, beech, atau pohon lainnya melalui proses ramah lingkungan. Kain ini dikenal sangat lembut, halus, dan memiliki tampilan yang elegan. Selain itu, Tencel memiliki kemampuan bernapas yang baik, sehingga menjaga tubuh tetap sejuk saat cuaca panas dan hangat saat cuaca dingin. Bahan ini juga memiliki sifat antibakteri alami, menjadikannya pilihan yang baik untuk mereka yang memiliki kulit sensitif. Tidak hanya nyaman, Tencel juga sangat kuat dan tahan lama, baik dalam kondisi basah maupun kering. Karena proses produksinya yang berkelanjutan, bahan ini sering dipilih oleh merek yang peduli lingkungan.",
        },
    ];

    const changeDesc = (data, index) => {
        setTitleDesc(data.bahan);
        setDesc(data.deskripsi);
        setActiveButton(index);
    };

    return (
        <Layout>
            <div className="bg-white py-40 rounded-3xl relative -top-5">
                <div className="m-10 flex justify-center">
                    <h1 className="text-3xl font-semibold">
                        Kategory Jenis Bahan
                    </h1>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 items-center text-center gap-x-10 gap-y-5">
                        {data.map((e, index) => (
                            <button
                                key={index}
                                onClick={() => changeDesc(e, index)}
                                className={`${
                                    activeButton == index
                                        ? "bg-[#FDDD38]"
                                        : "bg-[#D9D9D9]"
                                } rounded-full px-10 py-4`}
                            >
                                <p
                                    className={`${
                                        activeButton == index
                                            ? "font-bold"
                                            : "font-medium"
                                    } text-xl`}
                                >
                                    {e.bahan}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="xl:w-1/2 bg-[#D9D9D9] w-screen p-10 m-20 rounded-xl">
                        <p className="font-medium text-lg my-5">{titleDesc}</p>
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="text-center my-10">
                    <p className="text-5xl font-thin">Apakah Kamu Tahu?</p>
                </div>
                <div className="lg:grid flex flex-col grid-cols-5 gap-10 mx-24">
                    <div></div>
                    <div className="flex flex-col gap-10 col-span-2">
                        <div className="bg-[#FFFBDF] p-10 rounded-3xl">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Non ipsum corporis velit
                                magnam, suscipit placeat, doloremque odio vel
                                porro alias blanditiis? Pariatur iste eligendi
                                optio veniam. Tenetur doloremque dicta quidem!
                            </p>
                        </div>
                        <div className="bg-[#E8E6E2] p-10 rounded-3xl">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Non ipsum corporis velit
                                magnam, suscipit placeat, doloremque odio vel
                                porro alias blanditiis? Pariatur iste eligendi
                                optio veniam. Tenetur doloremque dicta quidem!
                            </p>
                        </div>
                    </div>
                    <div
                        style={{ backgroundImage: "url('hero.jpg')" }}
                        className="w-full lg:h-full bg-cover rounded-3xl h-48"
                    ></div>
                    <div></div>
                    <div></div>
                    <div
                        style={{ backgroundImage: "url('hero.jpg')" }}
                        className="w-full lg:h-full bg-cover rounded-3xl h-48"
                    ></div>
                    <div className="flex flex-col gap-10 col-span-2">
                        <div className="bg-[#FFFBDF] p-10 rounded-3xl">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Non ipsum corporis velit
                                magnam, suscipit placeat, doloremque odio vel
                                porro alias blanditiis? Pariatur iste eligendi
                                optio veniam. Tenetur doloremque dicta quidem!
                            </p>
                        </div>
                        <div className="bg-[#E8E6E2] p-10 rounded-3xl">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Non ipsum corporis velit
                                magnam, suscipit placeat, doloremque odio vel
                                porro alias blanditiis? Pariatur iste eligendi
                                optio veniam. Tenetur doloremque dicta quidem!
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </Layout>
    );
};

export default MaterialInfo;
