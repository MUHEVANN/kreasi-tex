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
import { Checkbox } from "@/Components/ui/checkbox";
import DynamicIcon from "@/Components/DynamicIcon";

export type ArtikelColumn = {
    id: number;
    title: string;
    icon: string;
    created_at: string;
};

export const ColumnsValue = (
    handleDelete: (id: number) => void
): ColumnDef<ArtikelColumn>[] => [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: "title",
        cell: ({ row }) => {
            function capitalizeFirstLetter(text: string): string {
                return (
                    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
                );
            }
            return (
                <h1 className="normal-case">
                    {capitalizeFirstLetter(row.getValue("title"))}
                </h1>
            );
        },
    },

    {
        accessorKey: "desc",
        header: "desc",
    },
    {
        accessorKey: "icon",
        cell: ({ row }) => {
            return (
                <div className="flex items-center">
                    <DynamicIcon iconId={row.original.icon} />
                </div>
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
                            <Link href={`/dashboard/values/${value.id}/edit`}>
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
