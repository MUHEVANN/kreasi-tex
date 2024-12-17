import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/Components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import AdminLayout from "@/Layouts/AdminLayout";
import { post, put } from "@/lib/api";
import { router } from "@inertiajs/react";
const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    desc: z.string().min(1, { message: "Title is required" }),
    link: z
        .string()
        .min(1, { message: "Title is required" })
        .refine(
            (link) => {
                const iframeRegex = /<iframe[^>]*src="[^"]+"[^>]*>.*<\/iframe>/;
                return iframeRegex.test(link);
            },
            {
                message: "Link tidak valid",
            }
        ),
});

export type GmapProps = {
    id: number;
    title: string;
    desc: string;
    link: string;
    created_at: string;
};

function GmapEdit({ gmap }: { gmap: GmapProps }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: gmap.title,
            desc: gmap.desc,
            link: gmap.link,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await put(`/g-map/${gmap.id}`, data);
            router.visit("/dashboard/g-map");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Edit Google Map Page</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jogja" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="desc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Deskripsi</FormLabel>
                                <FormControl>
                                    <Input placeholder="congdcad" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="link"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Link Google Map</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="<iframe src=''></iframe>"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </AdminLayout>
    );
}

export default GmapEdit;
