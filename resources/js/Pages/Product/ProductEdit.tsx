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
import { Checkbox } from "@/Components/ui/checkbox";
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
        )
        .optional(),
    harga: z.string().min(1, { message: "Harga wajib diisi!" }),
    is_view: z.boolean().default(false),
});

type ProductProps = {
    id: number;
    nama: string;
    deskripsi: string;
    bahan_id: string;
    gambar: string;
    created_at: string;
    harga: string;
    is_view: boolean;
};

const ProductEdit = ({ product }: { product: ProductProps }) => {
    const [bahanList, setBahanList] = useState([]);
    const [gambar, setGambar] = useState<string>("");
    const [loading, setLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nama: product.nama,
            deskripsi: product.deskripsi,
            bahan_id: product.bahan_id.toString(),
            harga: product.harga,
            is_view: !!product.is_view,
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
            if (data.gambar) {
                formData.append("gambar", data.gambar[0]);
            }
            formData.append("is_view", data.is_view.toString());

            await post(`/product/${product.id}`, formData);

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
        setGambar(`/storage/${product.gambar}`);
    }, []);

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Edit Product Page</h1>
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
                                    value={field.value}
                                    onValueChange={field.onChange}
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
                                                defaultValue={bahan.id.toString()}
                                            >
                                                {bahan.nama}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )}
                    />
                    <div className="w-[50px] h-[50px] bg-black rounded-sm overflow-hidden">
                        <img src={gambar} className="w-full h-full" alt="" />
                    </div>
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
                                    <Input placeholder="5" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="is_view"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="mr-3">
                                    Tampilkan
                                </FormLabel>
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
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

export default ProductEdit;
