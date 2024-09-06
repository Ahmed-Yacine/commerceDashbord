'use client'
import AnalyticsCard from './AnalyticsCard'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { DataTable } from '../ui/DataTable'


type topCustomersProps = {
    data : Customers[]
}

export type Customers = {
    id: string
    name: string
    email: string
    orders: number
    image: string
}

export const topCustomersColumns: ColumnDef<Customers>[] = [
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
]

const TopCustomers = ({data} : topCustomersProps) => {
    console.log(data)
return (
    <AnalyticsCard title="Top Customers" subTitle="Showing Top Customers">
        <DataTable columns={topCustomersColumns} data={data} />
    </AnalyticsCard>
)
}

export default TopCustomers
