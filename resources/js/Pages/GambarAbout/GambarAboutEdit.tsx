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
import { post, put } from "@/lib/api";
import { router } from "@inertiajs/react";
const formSchema = z.object({
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
                message: "File must be an image",
            }
        ),
});

type ValueProps = {
    id: number;
    gambar: string;
    created_at: string;
};

function ValueEdit({ gambar }: { gambar: ValueProps }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            gambar: undefined,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            if (data.gambar) {
                formData.append("gambar", data.gambar[0]);
            }
            await post(`/gambar-about/${gambar.id}`, formData);
            router.visit("/dashboard/gambar-about");
        } catch (error) {
            console.log(error);
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

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </AdminLayout>
    );
}

export default ValueEdit;
