"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type Customers = {
    id: string
    name: string
    email: string
    orders: number
    image: string
}

export const columns: ColumnDef<Customers>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "orders",
        header: "Orders",
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({row}) => {
            const imageUrl = row.getValue("image") as string
            return(
                <Image src={imageUrl} alt="Customer" width={50} height={50} className='border-2 border-primary'/>
            )
        }
    },
    {
        id: "actions",
        cell: ({ row }) => {
        const payment = row.original
    
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete Customer</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
        },
    },
]

