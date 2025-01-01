import React from "react";
import { cn } from "@/lib/utils";

type TitleSectionProps = {
    children: React.ReactNode;
    className?: string;
};
function TitleSection({ children, className }: TitleSectionProps) {
    return (
        <h1
            className={cn(
                " md:text-6xl text-2xl text-[#332C29] mb-3 uppercase relative text-center",
                className
            )}
        >
            {children}
        </h1>
    );
}

export default TitleSection;
