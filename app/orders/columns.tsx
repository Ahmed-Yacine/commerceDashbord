"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
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
import { formatDate } from "@/utils/formatDate"
import { formatPrice } from "@/utils/formatPrice"
export type Orders = {
    id: string | number
    orderNumber: string
    totalAmount: number
    date: number
}

export const columns: ColumnDef<Orders>[] = [
    {
        accessorKey: "orderNumber",
        header: "Order Number",
    },
    {
        accessorKey: "totalAmount",
        header: "Total Amount",
        cell : ({ row }) => {
            const totalAmount  = row.getValue('totalAmount') as number
            const formattedPrice = formatPrice(totalAmount)
            return <> 
                {formattedPrice}
            </>
        }
    },
    {
        accessorKey: "date",
        header: "Date",
        cell : ({ row }) => {
            const date  = row.getValue('date') as number
            const dateObj = new Date(date)
            const formattedDate = formatDate(dateObj)
            return <span className="text-nowrap">
                {formattedDate}
            </span>
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
                <DropdownMenuItem>View Order Details</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Delete Order</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
        },
    },
]

