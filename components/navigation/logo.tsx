'use client'
import Image from "next/image"
import Link from "next/link"
import { usetoggleMenuStore } from "@/stores/toggleMenuStore"
import { motion , AnimatePresence, m } from "framer-motion"
function Logo() {
    const isOpen = usetoggleMenuStore((state) => state.isOpen)
    return (
        <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/logo-icon.svg"
                    alt="Logo Icon"
                    width={30}
                    height={30}
                />
                <AnimatePresence initial={false}>
                    {!isOpen && (
                        <motion.h1
                        className="text-xl font-semibold max-md:hidden"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            Next Dashboard
                        </motion.h1>
                    )}
                </AnimatePresence>
        </Link>
    )
    }
    
    export default Logo
    