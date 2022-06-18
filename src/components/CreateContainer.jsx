import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { MdEmojiFoodBeverage } from 'react-icons/md'

const CreateContainer = () => {

  // Category States
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [restaurant, setRestaurants] = useState("");
  const [filterCat, setFilterCat] = useState(null);
  const [calories, setCalories] = useState("");

  // Error States
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState("Error");
  const [errorMsg, setErrorMsg] = useState(null);

  // Load Time State
  const [loadTime, setloadTime] = useState(false);

  // Item Image State
  const [itemImage, setItemImage] = useState(null);



  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center'>
        {
          error && (
            <motion.p initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}
              className={`w-full p-2 rounded-lg text-center font-semibold ${alert === 'Error' ? 'bg-red-400 text-red-700' :
                'bg-green-400 text-green-800'}`}>{errorMsg}</motion.p>
          )
        }

        <div className='w-full gap-2 border-b border-gray-400 py-2 flex items-center'>
          <MdEmojiFoodBeverage className='text-xl text-gray-700' />
          <input type='text' className='w-full h-full text-textColor text-lg bg-transparent outline-none border-none font-semibold' required value={title} placeholder='Name of Food Item'
          onChange={(e) => setTitle(e.target.value)} />
        </div>
      </div>
    </div>
  )
}

export default CreateContainer