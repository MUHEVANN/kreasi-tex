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
    text: z.string().min(1, { message: "Text wajib diisi!" }),
    image: z
        .instanceof(FileList)
        .refine(
            (files) =>
                [
                    "image/jpeg",
                    "image/png",
                    "image/jpg",
                    "image/webp",
                    "image/svg",
                ].includes(files[0].type),
            {
                message: "File harus berupa gambar!",
            }
        ).optional(),
});

type FunfactProps = {
    id: number;
    text: string;
    image: string;
};

const FunfactEdit = ({ funfact }: { funfact:FunfactProps }) => {
    const [image, setImage] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            text: funfact.text,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append("text", data.text);
            if(data.image) {
                formData.append("image", data.image[0]);
            }

            await post(`/funfact/${funfact.id}`, formData);

            router.visit("/dashboard/funfact");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setImage(`/storage/${funfact.image}`);
    }, []);

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Edit Funfact Page</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Text</FormLabel>
                                <FormControl>
                                    <Input placeholder="Tahukah kamu ..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-[50px] h-[50px] bg-black rounded-sm overflow-hidden">
                        <img src={image} className="w-full h-full" alt="" />
                    </div>
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Gambar</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        onChange={(e) => {
                                            field.onChange(e.target.files);
                                        }}
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
};

export default FunfactEdit;
