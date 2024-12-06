import { AppSidebar } from "@/Components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/Components/ui/sidebar";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                <div className="lg:py-10 lg:px-12">{children}</div>
            </main>
        </SidebarProvider>
    );
}

export default AdminLayout;
