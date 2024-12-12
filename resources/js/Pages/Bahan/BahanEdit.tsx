import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/Components/ui/button";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/Components/ui/form";
import { title } from "process";
import { Inertia } from "@inertiajs/inertia";
import { Input } from "@/Components/ui/input";
import { post, put } from "@/lib/api";
import { router } from "@inertiajs/react";

const formSchema = z.object({
    nama: z.string().min(1, { message: "Nama wajib diisi!" }),
    deskripsi: z.string().min(1, { message: "Deskripsi wajib diisi!" }),
});

type BahanProps = {
    id: number;
    nama: string;
    deskripsi: string;
    created_at: string;
};

const BahanEdit = ({ bahan }: { bahan: BahanProps }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: bahan.nama,
            deskripsi: bahan.deskripsi,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await put(`/bahan/${bahan.id}`, data);

            router.visit("/dashboard/bahan");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="nama"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama</FormLabel>
                            <FormControl>
                                <Input placeholder="Katun" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="deskripsi"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Deskripsi</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Katun Jepang"
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
    );
};

export default BahanEdit;
