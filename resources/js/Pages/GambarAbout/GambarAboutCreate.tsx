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
import React, { useState } from "react";
import ButtonSubmit from "@/Components/ButtonSubmit";
const formSchema = z.object({
    gambar: z
        .instanceof(FileList, {
            message: "File tidak boleh kosong dan harus gambar",
        })
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
                message: "File must be an image",
            }
        ),
});

function GambarAboutCreate() {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [err, setErr] = useState("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gambar: undefined,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("gambar", data.gambar[0]);
            await post("/gambar-about", formData);

            router.visit("/dashboard/gambar-about");
        } catch (err: any) {
            setErr(err.response.data.message);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    };

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">
                Create Gambar About Page
            </h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                >
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
                                {err && (
                                    <span className="text-red-500 text-sm">
                                        {err}
                                    </span>
                                )}
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

export default GambarAboutCreate;
