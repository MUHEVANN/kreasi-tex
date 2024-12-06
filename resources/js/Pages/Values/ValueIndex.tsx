import AdminLayout from "@/Layouts/AdminLayout";
import { DataTableValue } from "./DataTable/DataTableValue";
import { ColumnsValue } from "./DataTable/ColumnsValue";
const data = [
    {
        title: "tedkjandwa",
        icon: "Value 1",
        name: "Description 1",
        id: 1,
        created_at: "2024-10-10",
    },
];

function ValueIndex() {
    const handleDelete = (id: number) => {};
   
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold">Value Page</h1>
            <DataTableValue columns={ColumnsValue(handleDelete)} data={data} />
        </AdminLayout>
    );
}

export default ValueIndex;
