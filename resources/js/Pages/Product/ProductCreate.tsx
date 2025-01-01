import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

import React, { useEffect, useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { get, post } from "@/lib/api";
import { router } from "@inertiajs/react";
import Checkbox from "@/Components/Checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import AdminLayout from "@/Layouts/AdminLayout";
import ButtonSubmit from "@/Components/ButtonSubmit";

const formSchema = z.object({
    nama: z.string().min(1, { message: "Nama wajib diisi!" }),
    deskripsi: z.string().min(1, { message: "Deskripsi wajib diisi!" }),
    bahan_id: z.string().min(1, { message: "Bahan wajib diisi!" }),
    gambar: z
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
        ),
    harga: z.string().min(1, { message: "Harga wajib diisi!" }),
    is_view: z.boolean().default(false),
});
const ProductCreate = () => {
    const [bahanList, setBahanList] = useState([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: "",
            deskripsi: "",
            bahan_id: "",
            gambar: undefined,
            harga: "",
            is_view: false,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("nama", data.nama);
            formData.append("bahan_id", data.bahan_id);
            formData.append("deskripsi", data.deskripsi);
            formData.append("harga", data.harga);
            formData.append("gambar", data.gambar[0]);
            formData.append("is_view", data.is_view.toString());

            await post("/product", formData);

            router.visit("/dashboard/product");
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    useEffect(() => {
        const fetchBahan = async () => {
            try {
                const response = await get("/bahan/data");
                setBahanList(response.data.data);
            } catch (error) {
                console.log("Error fetching bahan data: ", error);
            }
        };

        fetchBahan();
    }, []);

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Create Product Page</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2"
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
                    <FormField
                        control={form.control}
                        name="bahan_id"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bahan</FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Pilih Bahan" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {bahanList.map((bahan: any) => (
                                            <SelectItem
                                                key={bahan.id}
                                                value={bahan.id.toString()}
                                            >
                                                {bahan.nama}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="gambar"
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
                    <FormField
                        control={form.control}
                        name="harga"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Harga</FormLabel>
                                <FormControl>
                                    <Input placeholder="10000" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="is_view"
                        render={({ field }) => (
                            <FormItem className="flex items-center gap-2">
                                <FormLabel>Tampilkan</FormLabel>
                                <FormControl>
                                    <Checkbox {...(field as any)} />
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

export default ProductCreate;
