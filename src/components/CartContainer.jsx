import React from 'react'
import { motion } from 'framer-motion'

import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri';

const CartContainer = () => {
    return (
        <div className='w-375 z-[101] fixed top-0 right-0 h-screen bg-white drop-shadow-md flex flex-col'>
            <div className='w-full flex items-center justify-between cursor-pointer p-4'>
                <motion.div whileTap={{ scale: 0.75 }}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>
                <p className='text-textColor text-lg font-semibold'>Your Cart</p>

                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100
                        ease-in-out transition-all cursor-pointer text-textColor text-base'>
                    Clear <RiRefreshFill /> {' '}
                </motion.p>

            </div>
        </div>
    )
}

export default CartContainer