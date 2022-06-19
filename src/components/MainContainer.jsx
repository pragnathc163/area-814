import React from 'react'
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartContainer from './CartContainer';

const MainContainer = () => {

  const [{products}, dispatch] = useStateValue();

  const [buttonScroll, setButtonScroll] = useState(0)

  useEffect(() => {}, [buttonScroll])

  return (
    <div className='w-full h0auto flex flex-col items-center justify-center overflow-x-hidden'>
      <HomeContainer />

      {/* <MenuStuff /> */}

      {/* Greek Food */}
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Greek Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div onClick={() => setButtonScroll(-200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div onClick={() => setButtonScroll(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer buttonScroll={buttonScroll} flag={true} supplyData={products?.filter(n => n.Category === 'greek')} />
      </section>

      {/* Chinese */}
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Chinese Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div onClick={() => setButtonScroll(-200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div onClick={() => setButtonScroll(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer buttonScroll={buttonScroll} flag={true} supplyData={products?.filter(n => n.Category === 'chinese')} />
      </section>

      {/* Indian Food */}
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Indian Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div onClick={() => setButtonScroll(-200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div onClick={() => setButtonScroll(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer buttonScroll={buttonScroll} flag={true} supplyData={products?.filter(n => n.Category === 'indian')} />
      </section>

      {/* Fast Food */}
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Fast Food Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div onClick={() => setButtonScroll(-200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div onClick={() => setButtonScroll(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer buttonScroll={buttonScroll} flag={true} supplyData={products?.filter(n => n.Category === 'fastFood')} />
      </section>

      {/* Mexican Food */}
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Mexican Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div onClick={() => setButtonScroll(-200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div onClick={() => setButtonScroll(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer buttonScroll={buttonScroll} flag={true} supplyData={products?.filter(n => n.Category === 'mexican')} />
      </section>

      {/* Deserts */}
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Desert Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div onClick={() => setButtonScroll(-200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div onClick={() => setButtonScroll(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer buttonScroll={buttonScroll} flag={true} supplyData={products?.filter(n => n.Category === 'Deserts')} />
      </section>

      {/* Middle Eastern */}
      {/* Greek Food */}
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Middle Eastern Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div onClick={() => setButtonScroll(-200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div onClick={() => setButtonScroll(200)} whileTap={{ scale: 0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
        <RowContainer buttonScroll={buttonScroll} flag={true} supplyData={products?.filter(n => n.Category === 'middleEastern')} />
      </section>

      {/* <CartContainer /> */}

    </div>
  )
}

export default MainContainer;