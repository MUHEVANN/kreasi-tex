import AdminLayout from "@/Layouts/AdminLayout";
import { DataTableCarousel } from "./DataTable/DataTableCarousel";
import { CarouselColumn, ColumnsCarousel } from "./DataTable/ColumnsCarousel";
import { useEffect, useState } from "react";
import { del, get } from "@/lib/api";
import { Skeleton } from "@/Components/ui/skeleton";


const getData = async () => {
    const res = await get("/carousel/data");
    return res.data.data;
};

function CarouselIndex() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<CarouselColumn[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await getData();
            setData(res);
            setIsLoading(false);
        }

        fetchData();
    }, []);
    const handleDelete = async (id: number) => {
        try {
            await del(`/carousel/${id}`);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold">Gambar About Page</h1>
            {isLoading ? (
                <div className="mt-4">
                    <Skeleton className="h-8 w-96 mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                </div>
            ) : (
                <DataTableCarousel
                    columns={ColumnsCarousel(handleDelete)}
                    data={data}
                />
            )}
        </AdminLayout>
    );
}

export default CarouselIndex;
