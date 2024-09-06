import AnalyticsCard from "@/components/Dashbord/AnalyticsCard";
import TeamCard from "@/components/team/teamCard";
import TeamList from "@/components/team/teamList";

export interface Team {
    isAdmin: boolean;
    name: string;
    image: string;
    isApproved: boolean;
    email: string;
}

async function fetchTeam(): Promise<Team[]> {
    const res = await fetch("https://66d8e6f74ad2f6b8ed52f090.mockapi.io/team",
        { cache: "no-store" }
    );
    const data = await res.json();
    return data;
}


export default async function TeamPage() {
    const data = await fetchTeam();
    return (
        <div className="p-6">
            <TeamList data={data}/>
        </div>
    )
}