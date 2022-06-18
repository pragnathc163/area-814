import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { motion } from 'framer-motion';
import Logo from '../img/logo.png';
import User from '../img/user.png';

const Header = () => {
  return (
    <header className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop Stuff */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className='flex items-center gap-2'>
          <img src={Logo} className="w-20 object-cover" alt='logo' />
          <p className='text-headingColor text-x1 font-bold'>CycleFood</p>
        </div>

        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out cursor-pointer'>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out cursor-pointer'>For You</li>
          </ul>

          <div className='relative flex items-center justify-center'>
            <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
            <div className='absolute top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>2</p>
            </div>
          </div>

          <motion.img 
          whileTap={{scale:0.6}} 
          src={User} 
          className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer' 
          alt='user profile' 
          />
        </div>

      </div>

      {/* Mobile stuff */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>

  )
}

export default Header
