"use client";
import * as React from "react";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import DynamicIcon from "@/Components/DynamicIcon";
import { capitalizeFirstLetter } from "@/lib/text";

export type FaqColumn = {
    id: number;
    title: string;
    icon: string;
    created_at: string;
};

export const ColumnsFaq = (
    handleDelete: (id: number) => void
): ColumnDef<FaqColumn>[] => [
    {
        accessorKey: "question",
        header: "Question",
        cell: ({ row }) => {
            return (
                <h1 className="normal-case">
                    {capitalizeFirstLetter(row.getValue("question"))}
                </h1>
            );
        },
    },

    {
        accessorKey: "answer",
        header: "Jawaban",
    },

    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                    }
                >
                    Tanggal Dibuat
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ row }) => {
            const date = new Date(row.original.created_at);
            const day = date.getDate().toString().padStart(2, "0");
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const year = date.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            return formattedDate;
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const faq = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="hover:cursor-pointer">
                            <Link href={`/dashboard/faq/${faq.id}/edit`}>
                                Edit Faq
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => handleDelete(faq.id)}
                            className="hover:cursor-pointer"
                        >
                            Hapus Faq
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
