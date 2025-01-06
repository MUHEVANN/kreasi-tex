import { Quote } from "lucide-react";
import TestimoniCard from "./TestimoniCard";
import TitleSection from "./TitleSection";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { getData } from "@/lib/api";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type TestimonialProps = {
    id: number;
    name: string;
    comment: string;
    profile: string;
    created_at: string;
};

const sumbu = [
    { x: "500px", y: "100px" },
    { x: "200px", y: "450px" },
    { x: "700px", y: "500px" },
    { x: "500px", y: "400px" },
    { x: "600px", y: "250px" },
];

function Testimoni() {
    const [data, setData] = useState<TestimonialProps[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            setData(await getData("/testimonial/data"));
        };
        fetchData();
    }, []);

    return (
        <div className=" main__container pt-[3rem]">
            <TitleSection className="text-center">Testimonial</TitleSection>
            <div className="lg:min-h-[80vh] min-h-[40vh] 2xl:mx-[10rem] rounded-lg relative flex items-center justify-center">
                <Quote
                    size={42}
                    className="absolute top-[4rem] left-[10px] xl:left-[100px] opacity-50"
                />
                <Quote
                    size={42}
                    className="absolute -bottom-[4rem] right-[10px] lg:right-[100px] opacity-50"
                />

                <div className="hidden lg:block">
                    {data.map((item, i) => (
                        <TestimoniCard
                            key={i}
                            x={sumbu[i].x}
                            y={sumbu[i].y}
                            name={item.name}
                            profile={item.profile}
                            comment={item.comment}
                        />
                    ))}
                </div>

                <div className="md:px-[4rem] block lg:hidden">
                    <Carousel>
                        <CarouselContent className="max-w-[350px] mx-auto md:max-w-[500px]">
                            {data.map((item, i) => (
                                <CarouselItem className="py-[3rem]" key={i}>
                                    <div
                                        className={`bg-white px-5 py-5 shadow-xl  rounded-lg shadow-gray-100`}
                                    >
                                        <p className="text-xl opacity-75">
                                            {item.comment}
                                        </p>

                                        <div className="flex items-center gap-4 capitalize mt-[2rem]">
                                            <Avatar>
                                                <AvatarImage
                                                    src={`/storage/${item.profile}`}
                                                />
                                                <AvatarFallback>
                                                    CN
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="font-semibold text-md tracking-[-1px]">
                                                {item.name}
                                            </span>
                                        </div>

                                        <div className="triangle absolute right-[3rem] rotate-180 -bottom-[1.5rem]"></div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Testimoni;
