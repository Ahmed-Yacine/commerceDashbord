'use client'
import AnalyticsCard from './AnalyticsCard'
import { ColumnDef } from '@tanstack/react-table'
import Image from 'next/image'
import { DataTable } from '../ui/DataTable'
import { ProductsDummyData } from '@/constants/data'
import { formatPrice } from '@/utils/formatPrice'

export type TopProducts = {
    id: number
    name: string
    revenue: number
    price: number
    image: string
}

export const topProductsColumns: ColumnDef<TopProducts>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "revenue",
        header: "Revenue",
        cell : ({ row }) => {
            const totalrevenu  = row.getValue('revenue') as number
            const formattedrevenue = formatPrice(totalrevenu)
            return <> 
                {formattedrevenue}
            </>
        }
    },
    {
        accessorKey: "image",
        header: "Image",
        cell: ({row}) => {
            const imageUrl = row.getValue("image") as string
            return(
                <Image src={imageUrl} alt="product" width={50} height={50} className='border-2 border-primary'/>
            )
        }
    },
]

const TopProducts = () => {
const Most = ProductsDummyData.sort((a, b) => b.revenue - a.revenue).slice(0, 6)
return (
    <AnalyticsCard title="Top Products" subTitle="Showing Most Sold Products">
        <DataTable columns={topProductsColumns} data={Most} />
    </AnalyticsCard>
)
}

export default TopProducts
