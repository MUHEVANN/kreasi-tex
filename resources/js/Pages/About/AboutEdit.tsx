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
import { put } from "@/lib/api";
import { router } from "@inertiajs/react";
const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
    desc: z.string().min(1, { message: "Description is required" }),
});

type FaqProps = {
    id: number;
    title: string;
    desc: string;
    created_at: string;
};

function FaqEdit({ about }: { about: FaqProps }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: about.title,
            desc: about.desc,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await put(`/about/${about.id}`, data);
            router.visit("/dashboard/about");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Edit Deskripsi Page</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Deskripsi Header</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="deskripsi untuk header bold"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="desc"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Deskripsi</FormLabel>
                                <FormControl>
                                    <Input placeholder="desc" {...field} />
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

export default FaqEdit;
