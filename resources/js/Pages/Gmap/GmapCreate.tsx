import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
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
import { post } from "@/lib/api";
import { router } from "@inertiajs/react";
import ButtonSubmit from "@/Components/ButtonSubmit";
import React from "react";
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

function GmapCreate() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            desc: "",
            link: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            await post("/g-map", data);
            router.visit("/dashboard/g-map");
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Create Google Map Page</h1>
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

                    <ButtonSubmit loading={loading} />
                </form>
            </Form>
        </AdminLayout>
    );
}

export default GmapCreate;
