"use client";

import * as React from "react";
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/Components/NavMain";
import { NavProjects } from "@/Components/NavProjects";
import { NavUser } from "@/Components/NavUser";
import { TeamSwitcher } from "@/Components/TeamSwitcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/Components/ui/sidebar";

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],

    /*
    field isi sidebar
     {
            title: "Bahan",
            url: "/dashboard/bahan",
            icon: SquareTerminal,
            isActive: true,
            items? : []
    },
    */
    navHome: [
        {
            title: "Value",
            url: "/dashboard/values",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Faq",
            url: "/dashboard/faq",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Testimoni",
            url: "/dashboard/testimonial",
            icon: SquareTerminal,
            isActive: true,
        },
    ],
    navProduct: [
        {
            title: "Bahan",
            url: "/dashboard/bahan",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "Produk",
            url: "/dashboard/product",
            icon: SquareTerminal,
            isActive: true,
        },
    ],
    navAbout: [
        {
            title: "Deskripsi",
            url: "/dashboard/about",
            icon: SquareTerminal,
            isActive: true,
        },
        {
            title: "gambar",
            url: "/dashboard/about-image",
            icon: SquareTerminal,
            isActive: true,
        },
    ],
    navMaterial: [
        {
            title: "Fun Fact",
            url: "/dashboard/funfact",
            icon: SquareTerminal,
            isActive: true,
        },
    ],

    projects: [
        {
            name: "Design Engineering",
            url: "#",
            icon: Frame,
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: PieChart,
        },
        {
            name: "Travel",
            url: "#",
            icon: Map,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navHome} label="Home" />
                <NavMain items={data.navProduct} label="Produk" />
                <NavMain items={data.navAbout} label="About" />
                <NavMain items={data.navMaterial} label="Material" />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
