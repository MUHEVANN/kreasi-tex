"use client";

import * as React from "react";
import {
    AudioWaveform,
    BadgeCheck,
    BookCheck,
    CaseSensitive,
    CircleHelp,
    Command,
    Frame,
    GalleryVerticalEnd,
    Images,
    Map,
    MapPinHouse,
    MessageCircleQuestion,
    PieChart,
    SquareTerminal,
    Volleyball,
} from "lucide-react";

import { NavMain } from "@/Components/NavMain";
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
            icon: BookCheck,
            isActive: true,
        },
        {
            title: "Faq",
            url: "/dashboard/faq",
            icon: MessageCircleQuestion,
            isActive: true,
        },
        {
            title: "Testimoni",
            url: "/dashboard/testimonial",
            icon: BadgeCheck,
            isActive: true,
        },
        {
            title: "Google Map",
            url: "/dashboard/g-map",
            icon: MapPinHouse,
            isActive: true,
        },
    ],
    navProduct: [
        {
            title: "Bahan",
            url: "/dashboard/bahan",
            icon: Volleyball,
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
            icon: CaseSensitive,
            isActive: true,
        },
        {
            title: "Gambar",
            url: "/dashboard/gambar-about",
            icon: Images,
            isActive: true,
        },
    ],
    navMaterial: [
        {
            title: "Fun Fact",
            url: "/dashboard/funfact",
            icon: CircleHelp,
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
                {/* <TeamSwitcher teams={data.teams} /> */}
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navHome} label="Home" />
                <NavMain items={data.navProduct} label="Produk" />
                <NavMain items={data.navAbout} label="About" />
                <NavMain items={data.navMaterial} label="Material" />
            </SidebarContent>
            <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
