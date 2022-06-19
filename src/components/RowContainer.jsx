import React from 'react'

const RowContainer = () => {
  return (
    <div 
        className={'w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}'}
    >
        <div className="w-full md:w-350 h-20 bg-green-200 shadow-md backdrop-blur-lg"></div>
    </div>
  );
};

export default RowContainer