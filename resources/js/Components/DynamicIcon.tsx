import * as Icons from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
// Define the valid icon names (keys of the Icons object)
type IconName = keyof typeof Icons;

const DynamicIcon = ({
    iconId,
    className,
}: {
    iconId: string;
    className?: string;
}) => {
    const toPascalCase = (str: string) =>
        str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");

    // Convert the iconId to PascalCase and check if it matches a valid icon name
    const pascalCaseIconId = toPascalCase(iconId);
    const IconComponent =
        Icons[pascalCaseIconId as IconName] || Icons.AlertCircle;

    // Explicitly assert that the IconComponent is a valid React component
    const Component = IconComponent as React.ComponentType<
        React.SVGProps<SVGSVGElement>
    >;

    return <Component className={cn("w-6 h-6", className)} />;
};

export default DynamicIcon;
