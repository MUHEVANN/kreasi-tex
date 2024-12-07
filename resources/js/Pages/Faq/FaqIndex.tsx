import AdminLayout from "@/Layouts/AdminLayout";
import { DataTableFaq } from "./DataTable/DataTableFaq";
import { ColumnsFaq } from "./DataTable/ColumnsFaq";
import { useEffect, useState } from "react";
import { del, get } from "@/lib/api";
import { Skeleton } from "@/Components/ui/skeleton";

type FaqColumn = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    created_at: string;
};

const getData = async () => {
    const res = await get("/faq/data");
    return res.data.data;
};

function ValueIndex() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<FaqColumn[]>([]);
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
            await del(`/faq/${id}`);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold">Value Page</h1>
            {isLoading ? (
                <div className="mt-4">
                    <Skeleton className="h-8 w-96 mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                </div>
            ) : (
                <DataTableFaq columns={ColumnsFaq(handleDelete)} data={data} />
            )}
        </AdminLayout>
    );
}

export default ValueIndex;
