import React from 'react'
import { MdShoppingCart } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { useState } from 'react';

const RowContainer = ({ flag, supplyData, buttonScroll }) => {
  const foodRowRef = useRef()

  const [items, setItems] = useState([])
  
  const [{ cartItems }, dispatch] = useStateValue();

  const addItemToCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items))
  };

  useEffect(() => {
    addItemToCart()
  }, [items])

  useEffect(() => {
    foodRowRef.current.scrollLeft += buttonScroll
  }, [buttonScroll])
  return (
    <div
      ref={foodRowRef} className={`scroll-smooth w-full flex items-center gap-5 my-12 ${flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"}`}
    >
      {supplyData && supplyData.map(n => (
        <div key={n?.id} className="w-340 h-auto flex flex-col justify-center min-w-[340px] my-12 backdrop-blur-lg bg-cardInfo hover:drop-shadow-lg rounded-lg p-2">
          <div className="w-full flex items-center justify-between">
            <motion.img whileHover={{ scale: 1.2 }}
              src={n?.imgSrc}
              alt=""
              className="w-40 drop-shadow-2xl -mt-8"
            />
          </div>
          <motion.div onClick={() => setItems([...cartItems, n])} whileTap={{ scale: 0.75 }} className='w-8 h-8 bg-emerald-700 flex items-center hover:shadow-md justify-center cursor-pointer rounded-full'>
            <MdShoppingCart className='text-white' />
          </motion.div>

          <div className='w-full flex flex-col items-end justify-end'>
            <p className='text-textColor text-lg font-semibold'>{n?.title}</p>
            <p className='mt-1 text-sm text-gray-600'>{n?.Restaurant}</p>
            <p className='mt-1 text-sm text-gray-500'>{n?.calories}</p>
            <div className='flex items-center gap-8'>
              <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-green-500'>$</span>{n?.price}</p>
            </div>

          </div>

        </div>
      ))}
    </div>
  );
};

export default RowContainer