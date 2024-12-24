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
import { useEffect, useState } from "react";

const formSchema = z.object({
    name: z.string().min(1, { message: "Title is required" }),
    comment: z.string().min(1, { message: "Description is required" }),
    profile: z
        .instanceof(FileList)
        .refine(
            (files) =>
                files.length > 0 &&
                [
                    "image/jpeg",
                    "image/png",
                    "image/jpg",
                    "image/webp",
                    "image/svg",
                ].includes(files?.[0].type),
            {
                message: "File must be an image",
            }
        )
        .optional(),
});

type TestimonialProps = {
    id: number;
    name: string;
    comment: string;
    profile: string;
    created_at: string;
};

function TestimonialEdit({ testimonial }: { testimonial: TestimonialProps }) {
    const [image, setImage] = useState<string>("");
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: testimonial.name,
            comment: testimonial.comment,
            profile: undefined,
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("comment", data.comment);

            if (data.profile) {
                formData.append("profile", data.profile[0]);
            }

            const res = await post(`/testimonial/${testimonial.id}`, formData);
            console.log(res);
            router.visit("/dashboard/testimonial");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setImage(`/storage/${testimonial.profile}`);
    }, []);

    return (
        <AdminLayout>
            <h1 className="text-3xl font-bold mb-3">Create Testimoni Page</h1>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                >
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nama</FormLabel>
                                <FormControl>
                                    <Input placeholder="ex. rizal" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="comment"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Comment</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="ex. mantap sekali"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="w-[50px] h-[50px] bg-black">
                        <img src={image} className="w-full h-full" alt="" />
                    </div>
                    <FormField
                        control={form.control}
                        name="profile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Profile</FormLabel>
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

export default TestimonialEdit;
