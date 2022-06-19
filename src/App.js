import React, { useEffect } from 'react';
import { Header, MainContainer, CreateContainer } from "./components";
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getProductInfo } from './utils/firebaseSaveData';
import { actionType } from './context/reducer';
import { dataB } from './firebase.config';

const App = () => {

const [{products}, dispatch] = useStateValue();

const getData = async () => {
  await getProductInfo().then(n => {
    dispatch({
      type: actionType.SET_PRODUCTS,
      products: n
    })
  });
};

useEffect(() => {
  getData();
}, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col  bg-primary'>
        <Header />

        <main className='mt-20 px-16 py-10 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App;