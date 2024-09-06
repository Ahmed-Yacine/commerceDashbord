import { Customers, columns } from "./columns"
import { DataTable } from "./DataTable"
import AnalyticsCard from "@/components/Dashbord/AnalyticsCard"
import { Button } from "@/components/ui/button"


async function getData(): Promise<Customers[]> {  
    const res = await fetch(
    "https://66d8e6f74ad2f6b8ed52f090.Mockapi.io/Customers",
    { cache: "no-store" }
);
    const data = await res.json();
return data;
}

export default async function DemoPage() {
const data = await getData()
return (
    <section className="p-6">
        <AnalyticsCard title="Customers" subTitle="Showing All Customers With Orders">
            <Button className="mb-3">Add New Customers</Button> 
            
            <DataTable columns={columns} data={data} />
        </AnalyticsCard>
    </section>
)
}