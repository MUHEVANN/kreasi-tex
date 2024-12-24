import AdminLayout from "@/Layouts/AdminLayout";
import { DataTableProduct } from "./DataTable/DataTableProduct";
import { useEffect, useState } from "react";
import { del, get } from "@/lib/api";
import { Skeleton } from "@/Components/ui/skeleton";
import DynamicIcon from "@/Components/DynamicIcon";
import { ColumnsProduct } from "./DataTable/ColumnsProduct";
type BahanColumn = {
    id: number;
    nama: string;
    deskripsi: string;
    created_at: string;
};

const getData = async () => {
    const res = await get("/product/data");
    return res.data.data;
};

function ProductIndex() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any[]>([]);
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
            await del(`/product/${id}`);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold">Product Page</h1>
            {isLoading ? (
                <div className="mt-4">
                    <Skeleton className="h-8 w-96 mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                </div>
            ) : (
                <DataTableProduct
                    columns={ColumnsProduct(handleDelete)}
                    data={data}
                />
            )}
        </AdminLayout>
    );
}

export default ProductIndex;
