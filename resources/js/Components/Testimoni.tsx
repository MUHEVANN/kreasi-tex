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

function Testimoni() {
    return (
        <div className=" main__container">
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
                    <TestimoniCard x="500px" y="100px" />
                    <TestimoniCard x="200px" y="450px" />
                    <TestimoniCard x="700px" y="500px" />
                    <TestimoniCard x="100px" y="220px" />
                    <TestimoniCard x="500px" y="400px" />
                    <TestimoniCard x="600px" y="250px" />
                </div>

                <div className="px-[4rem] block lg:hidden">
                    <Carousel>
                        <CarouselContent className="max-w-[350px] mx-auto md:max-w-[500px]">
                            <CarouselItem className="py-[3rem]">
                                <div
                                    className={`bg-white px-5 py-5 shadow-xl  rounded-lg shadow-gray-100`}
                                >
                                    <p className="text-xl opacity-75">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Repudiandae, maiores!
                                    </p>

                                    <div className="flex items-center gap-4 capitalize mt-[2rem]">
                                        <img
                                            src=""
                                            alt=""
                                            className="w-[40px] h-[40px] rounded-full object-cover object-center"
                                        />
                                        <span className="font-semibold text-md tracking-[-1px]">
                                            Evan
                                        </span>
                                    </div>

                                    <div className="triangle absolute right-[3rem] rotate-180 -bottom-[1.5rem]"></div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="py-[3rem]">
                                <div
                                    className={`bg-white px-5 py-5 shadow-xl  rounded-lg shadow-gray-100`}
                                >
                                    <p className="text-xl opacity-75">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Repudiandae, maiores!
                                    </p>

                                    <div className="flex items-center gap-4 capitalize mt-[2rem]">
                                        <img
                                            src=""
                                            alt=""
                                            className="w-[40px] h-[40px] rounded-full object-cover object-center"
                                        />
                                        <span className="font-semibold text-md tracking-[-1px]">
                                            Evan
                                        </span>
                                    </div>

                                    <div className="triangle absolute right-[3rem] rotate-180 -bottom-[1.5rem]"></div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="py-[3rem]">
                                <div
                                    className={`bg-white  px-5 py-5 shadow-xl  rounded-lg shadow-gray-100`}
                                >
                                    <p className="text-xl opacity-75">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Repudiandae, maiores!
                                    </p>

                                    <div className="flex items-center gap-4 capitalize mt-[2rem]">
                                        <img
                                            src=""
                                            alt=""
                                            className="w-[40px] h-[40px] rounded-full object-cover object-center"
                                        />
                                        <span className="font-semibold text-md tracking-[-1px]">
                                            Evan
                                        </span>
                                    </div>

                                    <div className="triangle absolute right-[3rem] rotate-180 -bottom-[1.5rem]"></div>
                                </div>
                            </CarouselItem>
                            <CarouselItem className="py-[3rem]">
                                <div
                                    className={`bg-white  px-5 py-5 shadow-xl  rounded-lg shadow-gray-100`}
                                >
                                    <p className="text-xl opacity-75">
                                        Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Repudiandae, maiores!
                                    </p>

                                    <div className="flex items-center gap-4 capitalize mt-[2rem]">
                                        <img
                                            src=""
                                            alt=""
                                            className="w-[40px] h-[40px] rounded-full object-cover object-center"
                                        />
                                        <span className="font-semibold text-md tracking-[-1px]">
                                            Evan
                                        </span>
                                    </div>

                                    <div className="triangle absolute right-[3rem] rotate-180 -bottom-[1.5rem]"></div>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default Testimoni;
