import { Orders, columns } from "./columns"
import { DataTable } from "./DataTable"
import AnalyticsCard from "@/components/Dashbord/AnalyticsCard"
import { Button } from "@/components/ui/button"
import { ordersDummyData } from "@/constants/data"


export default async function DemoPage() {
return (
    <section className="p-6">
        <AnalyticsCard title="Orders" subTitle="Showing All Orders ">
            <Button className="mb-3">Add New Order</Button> 
            <DataTable columns={columns} data={ordersDummyData} />
        </AnalyticsCard>
    </section>
)
}