import * as Icons from "lucide-react";

type IconName = string;

const DynamicIcon = ({ iconId }: { iconId: IconName }) => {
    const toPascalCase = (str: string) =>
        str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join("");
    const IconComponent = Icons[toPascalCase(iconId)] || Icons.AlertCircle;
    return <IconComponent className="w-6 h-6 " />;
};

export default DynamicIcon;
