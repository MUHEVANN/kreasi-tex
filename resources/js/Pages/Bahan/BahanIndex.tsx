import AdminLayout from "@/Layouts/AdminLayout";
import { DataTableBahan } from "./DataTable/DataTableBahan";
import { useEffect, useState } from "react";
import { del, get } from "@/lib/api";
import { Skeleton } from "@/Components/ui/skeleton";
import DynamicIcon from "@/Components/DynamicIcon";
import { ColumnsBahan } from "./DataTable/ColumnsBahan";
type BahanColumn = {
    id: number;
    nama: string;
    deskripsi: string;
    created_at: string;
};

const getData = async () => {
    const res = await get("/bahan/data");
    return res.data.data;
};

function BahanIndex() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<BahanColumn[]>([]);
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
            await del(`/bahan/${id}`);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold">Bahan Page</h1>
            {isLoading ? (
                <div className="mt-4">
                    <Skeleton className="h-8 w-96 mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                </div>
            ) : (
                <DataTableBahan
                    columns={ColumnsBahan(handleDelete)}
                    data={data}
                />
            )}
        </AdminLayout>
    );
}

export default BahanIndex;
