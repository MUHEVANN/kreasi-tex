import { create } from "zustand";
import { CarouselColumn } from "@/Pages/Carousel/DataTable/ColumnsCarousel";
import { ValueProps } from "@/Components/ValueItem";
import { AboutColumn } from "@/Pages/About";

interface CarouselStore {
    carousel: CarouselColumn[];
    value: ValueProps[];
    about: AboutColumn[];
    setCarousel: (carousels: CarouselColumn[]) => void;
    setValue: (values: ValueProps[]) => void;
    setAbout: (abouts: AboutColumn[]) => void;
}

export const useCarouselStore = create<CarouselStore>((set) => ({
    carousel: [],
    value: [],
    about: [],
    setCarousel: (carousels: CarouselColumn[]) =>
        set(() => ({ carousel: carousels })),
    setValue: (values: ValueProps[]) => set(() => ({ value: values })),
    setAbout: (abouts: AboutColumn[]) => set(() => ({ about: abouts })),
}));
