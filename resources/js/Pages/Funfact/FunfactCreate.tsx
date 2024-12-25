import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/Components/ui/button";

import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { post } from "@/lib/api";
import { router } from "@inertiajs/react";

import AdminLayout from "@/Layouts/AdminLayout";
import ButtonSubmit from "@/Components/ButtonSubmit";

const formSchema = z.object({
    title1: z.string().min(1, { message: "Title 1 wajib diisi!" }),
    title2: z.string().min(1, { message: "Title 2 wajib diisi!" }),
    text1: z.string().min(1, { message: "Text 1 wajib diisi!" }),
    text2: z.string().min(1, { message: "Text 2 wajib diisi!" }),
    link_instagram: z
        .string()
        .min(1, { message: "Link reel Instagram wajib diisi!" }),
});
const FunfactCreate = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title1: "",
            title2: "",
            text1: "",
            text2: "",
            link_instagram: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            await post("/funfact", data);

            router.visit("/dashboard/funfact");
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
            <h1 className="text-3xl font-bold mb-3">Create Funfact Page</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="title1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title 1</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Tahukah kamu ... "
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="text1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Deskripsi 1</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Deskripsi ..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="title2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title 2</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Tahukah kamu ... "
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="text2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Deskripsi 2</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Deskripsi ..."
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="link_instagram"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Link Reel Instagram</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="https://www.instagram.com/reel/....."
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
};

export default FunfactCreate;
