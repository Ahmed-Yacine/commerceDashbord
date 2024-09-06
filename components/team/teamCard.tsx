
import { Team } from "@/app/team/page"
import Image from "next/image"
import { Card } from "../ui/card"
import { Button } from "../ui/button"

interface TeamCardProps {
    member: Team;
    isPending: boolean;
}

export default function TeamCard({member, isPending}: TeamCardProps) {
return (
    <Card className="dark:bg-tertiray bg-slate-100 flex flex-col justify-between items-center overflow-hidden rounded-lg p-5 gap-4 ">
        <Image
            className='rounded-full'
            src={member.image}
            alt={member.name}
            width={100}
            height={100}
        />
        <h1 className="text-center">
            {member.name}
        </h1>
        <div >{member.isAdmin ? 'Admin' : ''}</div>
        <div className="flex justify-center items-center gap-2">
            {isPending ? (
                <>
                    <Button>Approved</Button>
                    <Button variant='destructive'>Reject</Button>
                </>
            ) : (
                <>
                    <Button>Edit</Button>
                    <Button variant='destructive'>Delete</Button>
                </>
            )}
        </div>
    </Card>
)
}
