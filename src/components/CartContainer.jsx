import React from 'react'
import { motion } from 'framer-motion'

import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri';
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { actionType } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import CartItems from './CartItems';
import { useEffect } from 'react';
import { useState } from 'react';

const CartContainer = () => {

    const [{ showCart, cartItems }, dispatch] = useStateValue()
    const cartShow = () => {
        dispatch({
            type: actionType.SET_SHOW_CART,
            showCart: !showCart,
        });
    };

    const [tot, setTot] = useState([])

    useEffect(() => {
        let totalPrice = cartItems.reduce(function (accumulator, n) {
            return accumulator + n.quan * n.price;
        }, 0);
        setTot(totalPrice);
        console.log(tot);
    }, [tot, flag]);


    return (
        <motion.div className='w-375 z-[101] fixed top-0 right-0 h-screen bg-white drop-shadow-md flex flex-col'
            initial={{ opacity: 0, x: 200 }} exit={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }}>
            <div className='w-full flex items-center justify-between cursor-pointer p-4'>
                <motion.div onClick={cartShow} whileTap={{ scale: 0.75 }}>
                    <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>
                <p className='text-textColor text-lg font-semibold'>Your Cart</p>

                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md 
                cursor-pointer text-textColor text-base'>
                    Clear <RiRefreshFill /> {' '}
                </motion.p>
            </div>

            {/* Bottom Cart */}
            <div className='w-full h-full bg-bgCart rounded-t-[2rem] flex flex-col'>
                {/* Cart Objects Section */}
                <div className='w-full h-340 h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                    {/* Cart Objects */}
                    {cartItems && cartItems.map(n => (
                        <CartItems key={n.id} n={n} />
                    ))}
                </div>

                {/* Checkout Section */}
                <div className='w-full flex-1 bg-totalCart rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Sub Total</p>
                        <p className='text-gray-400 text-lg'>${tot}</p>
                    </div>

                    {/* Extra costs */}
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-400 text-lg'>Delivery</p>
                        <p className='text-gray-400 text-lg'>$2.5</p>
                    </div>

                    <div className='w-full border-b border-gray-600 my-2'></div>

                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-200 text-xl font-semibold'>Total</p>
                        <p className='text-gray-200 text-xl font-semibold'>${tot + 2.5}</p>
                    </div>

                    <motion.button whileTap={{ scale: 0.8 }} type='button' className='w-full p-2 rounded-full bg-green-600 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out'>
                        Check Out
                    </motion.button>
                </div>

            </div>
        </motion.div>
    )
}

export default CartContainer