import { get } from "@/lib/api";
import TitleSection from "./TitleSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import { useEffect, useState } from "react";

const getFaq = async () => {
    const res = await get("/faq/data");
    return res.data.data;
};

type FaqProps = {
    id: number;
    question: string;
    answer: string;
    created_at: string;
};

function Faq() {
    const [data, setData] = useState<FaqProps[]>([]);
    useEffect(() => {
        async function fetchData() {
            const res = await getFaq();
            setData(res);
        }
        fetchData();
    }, []);

    return (
        <div>
            <TitleSection className="text-center ">FAQ</TitleSection>
            <div className="main__container">
                {data.map((item, i) => (
                    <Accordion
                        key={i}
                        type="single"
                        collapsible
                        className="2xl:px-[20rem]"
                    >
                        <AccordionItem
                            value="item-1"
                            className="bg-gray-100 px-[1rem] mb-3"
                        >
                            <AccordionTrigger className="text-lg">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-md opacity-75">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default Faq;
