import React from 'react'
import { MdShoppingCart } from 'react-icons/md';
import { motion } from 'framer-motion';

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}`}
    >
      <div className="w-340 my-12 h-auto backdrop-blur-lg bg-cardOverlay drop-shadow-lg rounded-lg p-2">
        <div className="w-full flex items-center justify-between">
          <motion.img whileHover={{ scale: 1.2 }}
            src='https://firebasestorage.googleapis.com/v0/b/area-814.appspot.com/o/Images%2F1655602969330-quesadilla.png?alt=media&token=9ef5517e-036d-4107-9669-420911d7911a'
            alt=""
            className="w-30 drop-shadow-2xl -mt-8"
          />
        </div>
        <motion.div whileTap={{ scale: 0.75 }} className='w-10 h-10 bg-emerald-700 flex items-center hover:shadow-md justify-center cursor-pointer rounded-full'>
          <MdShoppingCart className='text-white' />
        </motion.div>

        <div className='w-full flex flex-col items-end justify-end'>
          <p className='text-textColor text-lg font-semibold'>Quesadilla</p>
          <p className='mt-1 text-sm text-gray-600'>Taco Gong</p>
          <p className='mt-1 text-sm text-gray-500'> 50 Cal</p>
          <div className='flex items-center gap-8'></div>
          <p className='text-lg text-headingColor font-semibold'><span className='text-sm text-green-500'>$</span>4.99</p>

        </div>

      </div>
    </div>
  );
};

export default RowContainer