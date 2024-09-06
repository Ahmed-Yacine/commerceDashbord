'use client'
import { motion } from 'framer-motion'
import { ChevronsLeft , ChevronsRight } from 'lucide-react'
import { Button } from '../ui/button'
import { usetoggleMenuStore } from '@/stores/toggleMenuStore'

function Menutoggle() {
    const { isOpen ,Toggle } = usetoggleMenuStore((state) => state)
return (
    <div className='flex items-center'>
        <button onClick={Toggle}>
            <motion.div 
            animate={{rotate:isOpen ? 360 : 0}}
            transition={{duration:0.5}}
            >
                {isOpen ? <ChevronsRight/>: <ChevronsLeft/>}
            </motion.div>
        </button>
    </div>
)
}

export default Menutoggle
