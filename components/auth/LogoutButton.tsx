'use client'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usetoggleMenuStore } from '@/stores/toggleMenuStore'
import { LogOut } from 'lucide-react'

function LogoutButton() {
    const isOpen = usetoggleMenuStore((state) => state.isOpen)
return (
    <div>
        <Button asChild>
            <Link href={'/'} className='flex gap-2'>
                <LogOut />
                <span className={`${!isOpen && 'max-md:hidden'} ${isOpen && 'hidden'}`}>
                    Log Out
                </span>
            </Link>
        </Button>
    </div>
)
}

export default LogoutButton
