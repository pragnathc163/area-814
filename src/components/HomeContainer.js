import React from 'react'
import Hunger from '../img/hunger.png';
import Hero from '../img/greenGradient.png';
import { staticData } from '../utils/appData';

const HomeContainer = () => {
    return (
        <section id='home' className='grid grid-cols-2 gap-2 w-full'>
            <div className='py-2 flex-1 flex flex-col items-start gap-6 justify-center'>
                <div className='bg-green-100 px-4 py-1 mr-12 flex rounded-full items-center gap-1 justify-center'>
                    <p className='text-base text-green-500 font-semibold'>Saving food and smiles across the nation! :) </p>
                    <div className='w-10 h-10 drop-shadow-x1 rounded-full overflow-hidden bg-white'>
                        <img src={Hunger} alt='Save Food' className='w-full h-full object-contain' />
                    </div>
                </div>

                <p className='text-[4.5rem] font-bold tracking-wide text-headingColor'>
                    Order now to support a <span className='text-green-600 text-[5rem]'>Greater Cause!</span>
                </p>

                <p className='text-base text-textColor text-left w-[80%]'>
                    FILL IN THIS TEXT LATER!!
                    Thrilled you are here to learn more about me! I'm Pragnath, a passionate developer and an informatics student at the University of Washington with a focus on software development. I enjoy problem-solving to develop simple and innovative solutions for complex problems that create impact.
                </p>

                <button type='button' className='bg-gradient-to-br from-green-300 to-green-500 w-auto px-4 py-2
                rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 '>Order Now!</button>

            </div>
            <div className='py-2 flex-1'>
                {/* <div className='w-full flex items-center justify-center relative'> */}
                <div className='py-2 flex-1 flex items-center relative'>
                    <img className='rounded-3xl ml-auto h-650' src={Hero} alt='Hero Backgound' />

                    <div className='w-full h-full absolute flex top-0 right-10 gap-4 flex-wrap px-32 py-4 items-center justify-center'>
                        {staticData && staticData.map(n => (
                            <div key={n.id} className='w-190 min-w-[190px] flex flex-col drop-shadow-lg items-center justify-center backdrop-blur-md bg-cardInfo p-4 rounded-3xl'>
                                <img src={n.imgSrc} alt='Main Restraunt #1' className='w-40 -mt-20' />
                                <p className='text-xl mt-4 font-semibold text-textColor'>{n.name}</p>

                                <p className='text-md text-gray-500 font-semibold my-2'>{n.decp}</p>
                                <p className='text-sm font-semibold text-headingColor'>{n.offer}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HomeContainer