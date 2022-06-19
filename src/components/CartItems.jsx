import React from 'react'
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { motion } from 'framer-motion'
import { useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useEffect } from 'react';

const CartItems = ({ n, flag, setFlag }) => {

    const [quan, setQuan] = useState(1);
    const [{ cartItems }, dispatch] = useStateValue()
    const [cartItem, setCartItem] = useState([]);

    const dispatchToCart = () => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: cartItem,
        })
    }

    useEffect(() => {
        setCartItem(cartItems);
    }, [quan])

    const updateQuan = (task, id) => {
        if (task == 'add') {
            setQuan(quan + 1);
            cartItems.map(n => {
                if (n.id === id) {
                    n.quan += 1;
                    setFlag(flag + 1);
                }
            });
            dispatchToCart();
        } else {
            if (quan == 1) {
                setCartItem(cartItems.filter((n) => n.id !== id))
                setFlag(flag + 1);
                dispatchToCart();
            } else {
                setQuan(quan - 1);
                cartItems.map(n => {
                    if (n.id === id) {
                        n.quan -= 1;
                        setFlag(flag + 1);
                    }
                });
                dispatchToCart();

            }
        }
    }

    return (
        <div key={n?.id} className='w-full p-1 px-2 rounded-lg bg-itemCart flex items-center gap-2'>
            <img src={n.imgSrc}
                alt='' className='w-20 h-20 max-w-[60px] rounded-full object-contain' />

            {/* Item Name */}
            <div className='flex flex-col gap-2'>
                <p className='text-base text-gray-50'>{n?.title}</p>
                <p className='text-sm block text-gray-300 font-semibold'>$ {n?.price * quan}</p>
            </div>

            {/* Checkout Button in Cart */}
            <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                <motion.div onClick={() => updateQuan('remove', n?.id)} whileTap={{ scale: 0.75 }}>
                    <BiMinusCircle className='text-gray-50' />
                </motion.div>
                <p className='w-5 h-5 rounded-sm bg-bgCart text-gray-50 flex items-center justify-center'>
                    {quan}
                </p>
                <motion.div onClick={() => updateQuan('add', n?.id)} whileTap={{ scale: 0.75 }}>
                    <BiPlusCircle className='text-gray-50' />
                </motion.div>
            </div>
        </div>
    )
}

export default CartItems