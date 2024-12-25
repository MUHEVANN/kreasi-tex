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
import { post, put } from "@/lib/api";
import { router } from "@inertiajs/react";
import ButtonSubmit from "@/Components/ButtonSubmit";
import React from "react";
const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    desc: z.string().min(1, { message: "Description is required" }),
    icon: z.string().min(1, { message: "Icon is required" }),
});

type ValueProps = {
    id: number;
    title: string;
    desc: string;
    icon: string;
    created_at: string;
};

function ValueEdit({ value }: { value: ValueProps }) {
    const [loading, setLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: value.title,
            desc: value.desc,
            icon: value.icon,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            await put(`/values/${value.id}`, data);
            router.visit("/dashboard/values");
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => setLoading(false), 500);
        }
    };
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Create Value Page</h1>
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
                                    <Input placeholder="murah" {...field} />
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
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="murah terjangkau dll"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="icon"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Icon{" "}
                                    <a
                                        href="https://lucide.dev/icons"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 underline ms-3"
                                    >
                                        refrensi icon
                                    </a>
                                </FormLabel>
                                <FormControl>
                                    <Input placeholder="tes dulu" {...field} />
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

export default ValueEdit;
