import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/Components/ui/button";
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
import { useState } from "react";
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
        )
        .refine((files) => files[0].size >= 2 * 1024 * 1024, {
            message: "ukuran maximal 2 mb",
        }),
});

function GambarAboutCreate() {
    const [err, setErr] = useState("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gambar: undefined,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append("gambar", data.gambar[0]);
            await post("/gambar-about", formData);

            router.visit("/dashboard/gambar-about");
        } catch (err:any) {
            setErr(err.response.data.message);
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

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </AdminLayout>
    );
}

export default GambarAboutCreate;
