import React from 'react'
import HomeContainer from './HomeContainer';
import { motion } from 'framer-motion';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const MainContainer = () => {
  return (
    <div className='w-full h0auto flex flex-col items-center justify-center overflow-x-hidden'>
      <HomeContainer />

      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold relative text-headingColor capitalize 
          before:w-20 before:h-1 before:absolute before:rounded-lg before:content
          before:bottom-0 before:left-0 transition-all ease-in-out duration-100 before:bg-green-500">
            Our Mexican Options
          </p>

          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{ scale:0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center curser-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronLeft className="text-lg text-white"></MdChevronLeft>
            </motion.div>
            <motion.div whileTap={{ scale:0.75 }} className="w-8 h-8 rounded-lg bg-green-300 flex items-center justify-center cursor-pointer
            hover:bg-green-500 transition-all duration-100 ease-in-out hover:shadow-lg">
              <MdChevronRight className="text-lg text-white"></MdChevronRight>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainContainer;