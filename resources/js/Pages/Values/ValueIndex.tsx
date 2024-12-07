import AdminLayout from "@/Layouts/AdminLayout";
import { DataTableValue } from "./DataTable/DataTableValue";
import { ColumnsValue } from "./DataTable/ColumnsValue";
import { useEffect, useState } from "react";
import { del, get } from "@/lib/api";
import { Skeleton } from "@/Components/ui/skeleton";
import DynamicIcon from "@/Components/DynamicIcon";
type ValueColumn = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    created_at: string;
};

const getData = async () => {
    const res = await get("/values/data");
    return res.data.data;
};

function ValueIndex() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<ValueColumn[]>([]);
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
            await del(`/values/${id}`);
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
                <DataTableValue
                    columns={ColumnsValue(handleDelete)}
                    data={data}
                />
            )}
        </AdminLayout>
    );
}

export default ValueIndex;
