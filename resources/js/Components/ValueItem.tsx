import React from "react";
import { Send } from "lucide-react";
import ValueCard from "@/Components/ValueCard";
import { get } from "@/lib/api";

type ValueProps = {
    title: string;
    desc: string;
    icon: string;
    id: number;
    created_at: string;
};

const getValues = async () => {
    const res = await get("/values/data");
    return res.data.data;
};

function ValueItem() {
    const [data, setData] = React.useState<ValueProps[]>([]);
    React.useEffect(() => {
        async function fetchData() {
            const res = await getValues();
            setData(res);
        }
        fetchData();
    }, []);

    return (
        <div className="flex items-center justify-center lg:justify-around gap-[2rem]  lg:gap-0 flex-wrap">
            {data.map((item, index) => (
                <ValueCard
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    icon={item.icon}
                />
            ))}
        </div>
    );
}

export default ValueItem;
