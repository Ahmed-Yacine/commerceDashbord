import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import Logo from "./logo"
import Menutoggle from "./menu-toggle"

import {ModeToggle} from "./mode-toggle"

function Navbar() {
return (
    <nav className="py-4 border-b">
        <div className="md:w-[95%] sm:w-[92%] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Logo />
                <Menutoggle />
            </div>
            <div className="flex gap-8 items-center">
                <ModeToggle />
                <span className="max-md:hidden text-lg">
                    Welcome back Ahmed 👋
                </span>
                <Avatar>
                    <AvatarImage  className="W-[45px] h-[45px] rounded-full" src="/avatar-image.avif" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    </nav>
)
}

export default Navbar
