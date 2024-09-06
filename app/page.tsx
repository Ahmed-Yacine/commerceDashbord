import { BarChar } from "@/components/Dashbord/BarChrat";
import Summary from "@/components/Dashbord/Summary";
import { RadarGraph } from "@/components/Dashbord/RadarGraph";
import TopProducts from "@/components/Dashbord/TopProducts";
import { PieChar } from "@/components/Dashbord/PieChart";
import { HorisontaleBarChar } from "@/components/Dashbord/HorisontaleBarChart";
import { Customers } from "@/components/Dashbord/TopCustomers";
import TopCustomers  from "@/components/Dashbord/TopCustomers";

async function getCustomers(): Promise<Customers[]> {
  const res = await fetch(
        "https://66d8e6f74ad2f6b8ed52f090.Mockapi.io/Customers",
        { cache: "no-store" }
      );
      const data = await res.json();
      return data;
}

export default async  function Home() {
  const data = await getCustomers()
  const topCustomers = data.sort((a, b) => b.orders - a.orders).slice(0, 7);
  return (
    <div className="p-4 grid gap-5">
      <Summary />
      <div className="grid lg:grid-cols-2 gap-10">
        <BarChar />
        <RadarGraph />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <TopProducts/>
        <PieChar />
      </div>
      <div className="grid lg:grid-cols-2 gap-10">
        <HorisontaleBarChar />
        <TopCustomers data={topCustomers}/>
      </div>
    </div>
  );
}   
