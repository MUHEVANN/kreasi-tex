import TitleSection from "./TitleSection";
import CardPreview from "@/Components/CardPreview";
import { Button } from "./ui/button";
import { Link } from "@inertiajs/react";
function ProductPreview() {
    return (
        <div className="main__container pb-[2rem]">
            <TitleSection className={"mb-3 lg:mb-10"}>
                Choose Your Product
            </TitleSection>
            <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 sm:grid-cols-2 gap-4 ">
                <CardPreview />
                <CardPreview />
                <CardPreview />
                <CardPreview />
            </div>
            <div className="flex justify-center mt-[2.5rem]">
                <Link href="/">
                    <Button
                        className="rounded-full px-16 border-slate-700 text-xl tracking-[-1px] h-[50px] "
                        variant={"outline"}
                    >
                        See All
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ProductPreview;
