import { AppSidebar } from "@/Components/AppSidebar";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/ui/breadcrumb";
import { Separator } from "@/Components/ui/separator";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/Components/ui/sidebar";

function AdminLayout({ children }: { children: React.ReactNode }) {
    const url = window.location.pathname;
    console.log(url.split("/"));
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {url
                                    .split("/")
                                    .filter((item) => item !== "")
                                    .map((item, i) => (
                                        <>
                                            <BreadcrumbItem>
                                                <BreadcrumbPage>
                                                    {item}
                                                </BreadcrumbPage>
                                            </BreadcrumbItem>
                                            {i !==
                                                url.split("/").length - 2 && (
                                                <BreadcrumbSeparator className="hidden md:block" />
                                            )}
                                        </>
                                    ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="px-4 lg:px-10">{children}</div>
            </SidebarInset>
        </SidebarProvider>
    );
}
export default AdminLayout;
