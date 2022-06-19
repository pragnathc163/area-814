import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase.config';

import { MdEmojiFoodBeverage, MdPriceCheck } from 'react-icons/md'
import { AiOutlineUpload, AiFillDelete } from "react-icons/ai";
import { GiFoodChain } from 'react-icons/gi'
import { FaHotel } from 'react-icons/fa'

import { filterCategories } from '../utils/appData';
import Load from './Load';
import { saveData } from '../utils/firebaseSaveData';

const CreateContainer = () => {

  // Category States
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [filterCat, setFilterCat] = useState(null);
  const [calories, setCalories] = useState("");

  // Error States
  const [error, setError] = useState(false);
  const [alert, setAlert] = useState("Error");
  const [errorMsg, setErrorMsg] = useState(null);

  // Load Time State
  const [loadTime, setLoadTime] = useState(false);

  // Item Image State
  const [itemImage, setItemImage] = useState(null);

  const uploadPic = (e) => {
    setLoadTime(true);
    const imgObj = e.target.files[0];
    const storeImgRef = ref(storage, `Images/${Date.now()}-${imgObj.name}`)
    const uploadFire = uploadBytesResumable(storeImgRef, imgObj);

    uploadFire.on('state_changed', (snapshot) => {
      const uploadProcess = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (alert) => {
      console.log(alert);
      setError(true);
      setErrorMsg('Unable to upload Image: Please try again later!');
      setAlert('Error');
      setTimeout(() => {
        setError(false);
        setLoadTime(false)
      }, 4000);
    }, () => {
      getDownloadURL(uploadFire.snapshot.ref).then(downloadURL => {
        setItemImage(downloadURL);
        setLoadTime(false);
        setError(true);
        setErrorMsg('Image uploaded successfully!');
        setAlert('Success');
        setTimeout(() => {
          setError(false);
        }, 4000);
      })
    });
  };

  const cleanData = () => {
    setTitle('');
    setCalories('');
    setPrice('')
    setItemImage(null);
    setRestaurant('');
    setFilterCat('Choose a Category:')
  }

  const deletePic = () => {
    setLoadTime(true);
    const deleteImgRef = ref(storage, itemImage);
    deleteObject(deleteImgRef).then(() => {
      setItemImage(null);
      setLoadTime(false);
      setError(true);
      setErrorMsg('Image removed successfully!');
      setAlert('Success');
      setTimeout(() => {
        setError(false);
      }, 4000);
    });
  };

  const uploadProduct = () => {
    setLoadTime(true);
    try {
      if ((!title || !calories || !itemImage || !price || !filterCat)) {
        setError(true);
        setErrorMsg('Please ensure all required fields are entered!');
        setAlert('Error');
        setTimeout(() => {
          setError(false);
          setLoadTime(false)
        }, 4000);
      } else {
        const impData = {
          id: `${Date.now()}`, title: title, price: price,
          quantity: 1, Category: filterCat, imgSrc: itemImage, Restaurant: restaurant
        }
        saveData(impData);
        setLoadTime(false);
        setError(true);
        setErrorMsg('Product uploaded successfully!');
        cleanData(); 
        setAlert('Success');
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    } catch (alert) {
      console.log(alert);
      setError(true);
      setErrorMsg('Unable to upload Image: Please try again later!');
      setAlert('Error');
      setTimeout(() => {
        setError(false);
        setLoadTime(false)
      }, 4000);
    }
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <div className='w-[75%] border border-gray-300 gap-4 rounded-lg p-4 flex flex-col items-center justify-center'>
        {
          error && (
            <motion.p initial={{ opacity: 0 }} exit={{ opacity: 0 }} animate={{ opacity: 1 }}
              className={`w-full p-2 rounded-lg text-center font-semibold ${alert === 'Error' ? 'bg-red-400 text-red-700' :
                'bg-green-400 text-green-800'}`}>{errorMsg}</motion.p>
          )
        }

        <div className='w-full gap-2 border-b border-gray-400 py-2 flex items-center'>
          <MdEmojiFoodBeverage className='text-xl text-gray-700' />
          <input type='text' className='w-full h-full text-textColor text-lg bg-transparent outline-none border-none' required value={title} placeholder='Name of Food Item'
            onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className='w-full'>
          <select className='outline-none w-full text-base cursor-pointer border-b-2 border-gray-300 p-2 rounded-md' onChange={(e) => setFilterCat(e.target.value)}>
            <option value='other' className='bg-white'>Select Food Category</option>
            {filterCategories && filterCategories.map(n => (
              <option key={n.id} className='text-base border-0 outline-none capitalize bg-white text-headingColor'
                value={n.urlParamName}>
                {n.name}
              </option>
            ))}
          </select>
        </div>

        <div className='group flex flex-col items-center justify-center border-2 border-dotted border-gray-300
        h-420 w-full cursor-pointer rounded-lg'>
          {loadTime ? <Load /> : <>
            {!itemImage ? <>
              <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                <div className='w-full h-full gap-2 flex flex-col items-center justify-center'>
                  <AiOutlineUpload className='text-gray-500 text-3xl hover:text-gray-900' />
                  <p className='text-gray-500 hover:text-gray-900'>Upload Product Image</p>
                </div>
                <input type='file' name='uploadImage' accept='image/*' className='w-0 h-0' onChange={uploadPic} />
              </label>
            </> : <>
              <div className='relative h-full'>
                <img className='w-full h-full object-cover' src={itemImage} alt='uploadImage'></img>
                <button type='button' onClick={deletePic} className='absolute bottom-4 right-3 p-3 bg-red-500 text-xl cursor-pointer
                outline-none hover:shadow-md transition-all ease-in-out duration-500 rounded-full'>
                  <AiFillDelete className='text-white' />
                </button>
              </div>
            </>}
          </>}
        </div>

        <div className='w-dull flex flex-row gap-3 items-center'>
          <div className='w-full py-2 gap-2 flex items-center border-b border-gray-400'>
            <GiFoodChain className='text-gray-800 text-2xl' />
            <input type='text' className='w-full h-full text-textColor text-lg bg-transparent outline-none border-none'
              required placeholder='Calories' value={calories} onChange={(e) => setCalories(e.target.value)} />
          </div>

          <div className='w-full py-2 gap-2 flex items-center border-b border-gray-400'>
            <MdPriceCheck className='text-gray-800 text-2xl' />
            <input type='text' className='w-full h-full text-textColor text-lg bg-transparent outline-none border-none'
              required placeholder='Price' value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>

          <div className='w-full py-2 gap-2 flex items-center border-b border-gray-400'>
            <FaHotel className='text-gray-800 text-2xl' />
            <input type='text' className='w-full h-full text-textColor text-lg bg-transparent outline-none border-none'
              required placeholder='Restaurant Name' value={restaurant} onChange={(e) => setRestaurant(e.target.value)} />
          </div>

        </div>

        <div className='flex items-center w-full'>
          <button type='button' onClick={uploadProduct} className='ml-auto w-auto bg-emerald-600 px-12 py-2 rounded-lg text-lg text-white font-semibold border-none outline-none'>
            Add Product
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreateContainer