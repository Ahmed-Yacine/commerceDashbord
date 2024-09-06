'use client';
import { Team } from "@/app/team/page";
import TeamCard from "./teamCard";

interface TeamListProps {
    data : Team[];
}

export default function TeamList({data}: TeamListProps) {
    const approverMembers = data.filter (member => member.isApproved);
    const pendingrMembers = data.filter (member => !member.isApproved);
return (
    <div className="space-y-16">
        <div>
            <h2 className="mb-4">
                Approved Members
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {approverMembers.map((member,index) => 
                    <TeamCard 
                    key={index}
                    member={member}
                    isPending={false}
                    />
                )}
            </div>
        </div>
        <div>
            <h2 className="mb-4">
                Pending Members
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                {pendingrMembers.map((member,index) => 
                    <TeamCard 
                    key={index}
                    member={member}
                    isPending={true}
                    />
                )}
            </div>
        </div>
    </div>
)
}
