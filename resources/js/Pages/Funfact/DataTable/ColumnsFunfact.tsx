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

export type FunfactColumn = {
    id: number;
    text: string;
    image: string;
    created_at: string;
};

export const ColumnsFunfact = (
    handleDelete: (id: number) => void
): ColumnDef<FunfactColumn>[] => [
    {
        accessorKey: "title1",
        header: "title1",
        cell: ({ row }) => {
            function capitalizeFirstLetter(text: string): string {
                return (
                    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
                );
            }
            return (
                <h1 className="normal-case">
                    {capitalizeFirstLetter(row.getValue("title1"))}
                </h1>
            );
        },
    },
    {
        accessorKey: "text1",
        header: "text1",
        cell: ({ row }) => {
            function capitalizeFirstLetter(text: string): string {
                return (
                    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
                );
            }
            return (
                <h1 className="normal-case">
                    {capitalizeFirstLetter(row.getValue("text1"))}
                </h1>
            );
        },
    },
    {
        accessorKey: "title2",
        header: "title2",
        cell: ({ row }) => {
            function capitalizeFirstLetter(text: string): string {
                return (
                    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
                );
            }
            return (
                <h1 className="normal-case">
                    {capitalizeFirstLetter(row.getValue("title2"))}
                </h1>
            );
        },
    },
    {
        accessorKey: "text2",
        header: "text2",
        cell: ({ row }) => {
            function capitalizeFirstLetter(text: string): string {
                return (
                    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
                );
            }
            return (
                <h1 className="normal-case">
                    {capitalizeFirstLetter(row.getValue("text2"))}
                </h1>
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
                            <Link href={`/dashboard/funfact/${value.id}/edit`}>
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
