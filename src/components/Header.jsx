import React, { useState } from 'react';
import { MdShoppingCart, MdLibraryAdd, MdOutlineLogout } from 'react-icons/md';
import { motion } from 'framer-motion';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { myApp } from '../firebase.config';

import Logo from '../img/logo.png';
import User from '../img/user.png';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const Header = () => {

  const firebaseAuth = getAuth(myApp);
  const provider = new GoogleAuthProvider();

  const [{ user, showCart, cartItems }, dispatch] = useStateValue()

  const [isMenu, setIsMenu] = useState(false)

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem('user', JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const cartShow = () => {
    dispatch({
      type: actionType.SET_SHOW_CART,
      showCart: !showCart,
    });
  }

  const logout = () => {
    setIsMenu(false)
    localStorage.clear()

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="z-50 w-screen p-6 px-16 absolute">
      {/* Desktop Stuff */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className='flex items-center gap-2'>
          <img src={Logo} className="w-20 object-cover" alt='logo' />
          <p className='text-headingColor text-x1 font-bold'>CycleFood</p>
        </Link>

        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li onClick={() => setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out cursor-pointer'>Home</li>
            <li onClick={() => setIsMenu(false)} className='text-base text-textColor hover:text-headingColor duration-100
          transition-all ease-in-out cursor-pointer'>About Us</li>
          </ul>

          <div onClick={cartShow} className='relative flex items-center justify-center'>
            <MdShoppingCart
              className='text-textColor text-2xl cursor-pointer'
            />
            {cartItems && cartItems.length > 0 && (
              <div className='absolute top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                <p className='text-xs text-white font-semibold'>{cartItems.length}</p>
              </div>
            )}
          </div>

          <div className='relative'>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : User}
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
              alt='user profile'
              onClick={login}
            />

            {
              isMenu && (
                <motion.div initial={{ opacity: 0, scale: 0.6 }} exit={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} className='w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2'>
                  {
                    user && user.email === 'prag2002@uw.edu' && (
                      <Link to={'/createItem'}>
                        <p onClick={() => setIsMenu(false)} className='flex items-center cursor-pointer gap-3 hover:bg-slate-100 transition-all
                    duration-100 ease-in-out text-textColor text-base'><MdLibraryAdd />New Item</p>
                      </Link>
                    )
                  }
                  <p className='py-1.5 flex items-center cursor-pointer gap-3 hover:bg-slate-100 transition-all
              duration-100 ease-in-out text-textColor text-base' onClick={logout}><MdOutlineLogout />Logout</p>
                </motion.div>
              )
            }

          </div>
        </div>

      </div>

      {/* Mobile stuff */}
      <div className="flex md:hidden w-full h-full">
      </div>
    </header>

  )
}

export default Header