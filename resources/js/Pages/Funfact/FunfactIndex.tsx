import AdminLayout from "@/Layouts/AdminLayout";
import { DataTableFunfact } from "./DataTable/DataTableFunfact";
import { useEffect, useState } from "react";
import { del, get } from "@/lib/api";
import { Skeleton } from "@/Components/ui/skeleton";
import DynamicIcon from "@/Components/DynamicIcon";
import { ColumnsFunfact } from "./DataTable/ColumnsFunfact";
import { InstagramEmbed } from "react-social-media-embed";

type FunfactColumn = {
    id: number;
    text: string;
    image: string;
    created_at: string;
};

const getData = async () => {
    const res = await get("/funfact/data?page=1&size=999");
    return res.data.data;
};

function FunfactIndex() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<FunfactColumn[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await getData();
            setData(res.data);
            setIsLoading(false);
        }

        fetchData();
    }, []);
    const handleDelete = async (id: number) => {
        try {
            await del(`/funfact/${id}`);
            setData(data.filter((item) => item.id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold">Funfact Page</h1>
            {isLoading ? (
                <div className="mt-4">
                    <Skeleton className="h-8 w-96 mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                    <Skeleton className="h-8 w-full mb-2" />
                </div>
            ) : (
                <DataTableFunfact
                    columns={ColumnsFunfact(handleDelete)}
                    data={data}
                />
            )}
        </AdminLayout>
    );
}

export default FunfactIndex;
