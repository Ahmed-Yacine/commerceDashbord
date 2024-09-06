'use client'

import { usetoggleMenuStore } from "@/stores/toggleMenuStore" 
import { motion } from "framer-motion"
import LogoutButton from "../auth/LogoutButton"
import MenuLinks from "./menu-links"

function Sidebar() {
    const isOpen = usetoggleMenuStore((state) => state.isOpen)
    return (
        <motion.div
        initial={{ width: isOpen ? 80 : 250}}
        animate={{ width: isOpen ? 80 : 250}}
        transition={{ duration: 0.3,ease: "easeInOut"}}
        className={` sticky z-10 h-screen top-0  flex flex-col items-center overflow-hidden py-10 border-r max-md:max-w-[80px] ${isOpen ? 'max-md:hidden gap-10' : 'block justify-between'}`}>
            <h2 className={`text-sm max-md:hidden ${isOpen && 'hidden'}`}>
                Main Menu
            </h2>
            <MenuLinks isOpen={isOpen}/>
            <LogoutButton />
        </motion.div>
    )
}

export default Sidebar