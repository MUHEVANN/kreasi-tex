import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/Components/ui/button";

import React, { useEffect, useState } from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { get, post } from "@/lib/api";
import { router } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import AdminLayout from "@/Layouts/AdminLayout";

const formSchema = z.object({
    title1: z.string().min(1, { message: "Title 1 wajib diisi!" }),
    title2: z.string().min(1, { message: "Title 2 wajib diisi!" }),
    text1: z.string().min(1, { message: "Text 1 wajib diisi!" }),
    text2: z.string().min(1, { message: "Text 2 wajib diisi!" }),
    link_instagram: z.string().min(1, { message: "Link reel Instagram wajib diisi!" }),
});

type FunfactProps = {
    id: number;
    title1: string,
    title2: string,
    text1: string,
    text2: string,
    link_instagram: string
};

const FunfactEdit = ({ funfact }: { funfact:FunfactProps }) => {
    const [image, setImage] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title1: funfact.title1,
            title2: funfact.title2,
            text1: funfact.text1,
            text2: funfact.text2,
            link_instagram: funfact.link_instagram,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await post(`/funfact/${funfact.id}`, data);

            router.visit("/dashboard/funfact");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Edit Funfact Page</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title 1</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tahukah kamu ... " {...field} />
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
                                    <Input placeholder="Deskripsi ..." {...field} />
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
                                    <Input placeholder="Tahukah kamu ... " {...field} />
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
                                    <Input placeholder="Deskripsi ..." {...field} />
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
                                    <Input placeholder="https://www.instagram.com/reel/....." {...field} />
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
};

export default FunfactEdit;
