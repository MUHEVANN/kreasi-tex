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
import { put } from "@/lib/api";
import { router } from "@inertiajs/react";
import React from "react";
import ButtonSubmit from "@/Components/ButtonSubmit";
const formSchema = z.object({
    question: z.string().min(1, { message: "Title is required" }),
    answer: z.string().min(1, { message: "Description is required" }),
});

type FaqProps = {
    id: number;
    question: string;
    answer: string;
    created_at: string;
};

function FaqEdit({ faq }: { faq: FaqProps }) {
    const [loading, setLoading] = React.useState<boolean>(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: faq.question,
            answer: faq.answer,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setLoading(true);
        try {
            await put(`/faq/${faq.id}`, data);

            router.visit("/dashboard/faq");
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => setLoading(false), 500);
        }
    };
    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Create Faq Page</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                >
                    <FormField
                        control={form.control}
                        name="question"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pertanyaan</FormLabel>
                                <FormControl>
                                    <Input placeholder="murah" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="answer"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Jawaban</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="murah terjangkau dll"
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
}

export default FaqEdit;
