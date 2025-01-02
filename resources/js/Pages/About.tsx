import { Skeleton } from "@/Components/ui/skeleton";
import Layout from "@/Layouts/Layout";
import { getData } from "@/lib/api";
import { useEffect, useLayoutEffect, useState } from "react";

export type AboutColumn = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    created_at: string;
};
type GambarColumn = {
    id: number;
    gambar: string;
};

function About({ about }: { about: AboutColumn[] }) {
    const [gambar, setGambar] = useState<GambarColumn[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res2 = await getData("/gambar-about/data");
                setGambar(res2);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    useLayoutEffect(() => {
        window.scrollTo({
            top: 950,
            left: 100,
            behavior: "smooth",
        });
    }, []);

    return (
        <Layout>
            <div className="main__container rounded-t-[25px] bg-white -translate-y-5 relative z-[99]">
                <div className="grid md:grid-cols-3 xl:grid-cols-4 py-[3rem]">
                    <h1 className="text-coklat text-4xl">About us</h1>
                    {about.map((item, i) => (
                        <div className="col-span-2 xl:col-span-3" key={i}>
                            <h1 className="text-[32px] md:text-[50px] leading-[32px] md:leading-[50px] text-coklat font-bold ">
                                {item.title}
                            </h1>
                            <p className="text-xl mt-6">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {loading ? (
                        <>
                            <Skeleton className="w-full h-[400px]" />
                            <Skeleton className="w-full h-[400px]" />
                            <Skeleton className="w-full h-[400px]" />
                        </>
                    ) : (
                        gambar.map((item) => (
                            <img
                                src={`/storage/${item.gambar}`}
                                alt=""
                                key={item.id}
                                className="w-full h-[400px] object-cover"
                            />
                        ))
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default About;
