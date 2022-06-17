import React from 'react';
import Logo from './img/logo.png';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen p-6 px-16">
      {/* Desktop Stuff */}
      <div className="hidden md:flex w-full h-full"></div>
      <div className='flex items-center gap-2'>
        <img src={Logo} className="w-10 object-cover" alt='logo' />

      </div>
      {/* Mobile stuff */}
      <div className="flex md:hidden w-full h-full"></div>
    </div>

  )
}

export default Header
