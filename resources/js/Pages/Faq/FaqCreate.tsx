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
const formSchema = z.object({
    question: z.string().min(1, { message: "Title is required" }),
    answer: z.string().min(1, { message: "Description is required" }),
});

function ValueCreate() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            question: "",
            answer: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            await post("/faq", data);

            router.visit("/dashboard/faq");
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

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </AdminLayout>
    );
}

export default ValueCreate;