import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

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
import { put } from "@/lib/api";
import { router } from "@inertiajs/react";
import AdminLayout from "@/Layouts/AdminLayout";
import ButtonSubmit from "@/Components/ButtonSubmit";

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
    const [loading, setLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: bahan.nama,
            deskripsi: bahan.deskripsi,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            await put(`/bahan/${bahan.id}`, data);

            router.visit("/dashboard/bahan");
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
            <h1 className="text-3xl font-bold mb-3">Edit Bahan Page</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
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
                    <ButtonSubmit loading={loading} />
                </form>
            </Form>
        </AdminLayout>
    );
};

export default BahanEdit;
