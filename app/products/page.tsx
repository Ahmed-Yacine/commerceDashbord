import { Products, columns } from "./columns"
import { DataTable } from "./DataTable"
import AnalyticsCard from "@/components/Dashbord/AnalyticsCard"
import { Button } from "@/components/ui/button"
import { ProductsDummyData } from "@/constants/data"


export default async function DemoPage() {
return (
    <section className="p-6">
        <AnalyticsCard title="Products" subTitle="Showing All Products ">
            <Button className="mb-3">Add New Product</Button> 
            <DataTable columns={columns} data={ProductsDummyData} />
        </AnalyticsCard>
    </section>
)
}