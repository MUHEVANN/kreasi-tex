import * as Icons from "lucide-react";
import React from "react";

// Define the valid icon names (keys of the Icons object)
type IconName = keyof typeof Icons;

const DynamicIcon = ({ iconId }: { iconId: string }) => {
    const toPascalCase = (str: string) =>
        str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");

    // Convert the iconId to PascalCase and check if it matches a valid icon name
    const pascalCaseIconId = toPascalCase(iconId);
    const IconComponent = Icons[pascalCaseIconId as IconName] || Icons.AlertCircle;

    // Explicitly assert that the IconComponent is a valid React component
    const Component = IconComponent as React.ComponentType<React.SVGProps<SVGSVGElement>>;

    return <Component className="w-6 h-6" />;
};

export default DynamicIcon;
