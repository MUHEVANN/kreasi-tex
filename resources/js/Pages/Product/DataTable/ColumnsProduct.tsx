"use client";
import * as React from "react";

import { ColumnDef } from "@tanstack/react-table";
import {
    MoreHorizontal,
    ArrowUpDown,
    CircleCheck,
    CircleX,
} from "lucide-react";

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

export type ProductColumn = {
    id: number;
    nama: string;
    deskripsi: string;
    harga: number;
    is_view: boolean;
    count_start: string;
    gambar: string;
    created_at: string;
};

export const ColumnsProduct = (
    handleDelete: (id: number) => void
): ColumnDef<ProductColumn>[] => [
    {
        accessorKey: "nama",
        header: "nama",
        cell: ({ row }) => {
            function capitalizeFirstLetter(text: string): string {
                return (
                    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
                );
            }
            return (
                <h1 className="normal-case">
                    {capitalizeFirstLetter(row.getValue("nama"))}
                </h1>
            );
        },
    },

    {
        accessorKey: "deskripsi",
        header: "deskripsi",
    },

    {
        accessorKey: "harga",
        header: "harga",
    },

    {
        accessorKey: "gambar",
        header: "gambar",
        cell: ({ row }) => {
            return (
                <img
                    src={`/storage/${row.getValue("gambar")}`}
                    alt="gambar"
                    className="h-10 w-10 rounded-md"
                />
            );
        },
    },
    {
        accessorKey: "is_view",
        header: "Tampil Home",
        cell: ({ row }) => {
            return row.getValue("is_view") ? (
                <CircleCheck className="text-green-400" />
            ) : (
                <CircleX className="text-red-400" />
            );
        },
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
            const value = row.original;

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
                            <Link href={`/dashboard/product/${value.id}/edit`}>
                                Edit Value
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => handleDelete(value.id)}
                            className="hover:cursor-pointer"
                        >
                            Hapus Value
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];
