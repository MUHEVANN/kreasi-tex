import TitleSection from "./TitleSection";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

function Faq() {
    return (
        <div>
            <TitleSection className="text-center ">FAQ</TitleSection>
            <div className="main__container">
                <Accordion type="single" collapsible className="2xl:px-[20rem]">
                    <AccordionItem
                        value="item-1"
                        className="bg-gray-100 px-[1rem] mb-3"
                    >
                        <AccordionTrigger className="text-lg">
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent className="text-md opacity-75">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="2xl:px-[20rem]">
                    <AccordionItem
                        value="item-1"
                        className="bg-gray-100 px-[1rem] mb-3"
                    >
                        <AccordionTrigger className="text-lg">
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent className="text-md opacity-75">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="2xl:px-[20rem]">
                    <AccordionItem
                        value="item-1"
                        className="bg-gray-100 px-[1rem] mb-3"
                    >
                        <AccordionTrigger className="text-lg">
                            Is it accessible?
                        </AccordionTrigger>
                        <AccordionContent className="text-md opacity-75">
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}

export default Faq;
