import TitleSection from "./TitleSection";
import CardPreview from "@/Components/CardPreview";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { getData } from "@/lib/api";
export type ProductColumn = {
    id: number;
    nama: string;
    deskripsi: string;
    gambar: string;
    harga: string;
    is_view: boolean;
    bahan_nama: string;
    created_at: string;
};

function ProductPreview() {
    const [data, setData] = useState<ProductColumn[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const res = await getData("/product/data-view");
            setData(res);
        };

        fetchData();
    }, []);
    return (
        <div className="main__container pb-[2rem] pt-[4rem]">
            <TitleSection className={"mb-8 lg:mb-10"}>
                Choose Your Product
            </TitleSection>
            <div className="flex gap-4 justify-center flex-wrap">
                {data.map((item, i) => (
                    <CardPreview key={i} props={item} />
                ))}
            </div>
            <div className="flex justify-center mt-[3rem] md:mt-[5rem]">
                <Link href="/product">
                    <Button
                        className="rounded-full px-10 md:px-16 border-slate-700 text-xl tracking-[-1px] h-[50px] "
                        variant={"outline"}
                    >
                        See All
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ProductPreview;
