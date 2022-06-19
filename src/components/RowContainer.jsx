import React from 'react'

const RowContainer = () => {
  return (
    <div 
        className={'w-full my-12 ${flag ? "overflow-x-scroll" : "overflow-x-hidden"}'}
    >
        <div className="w-full md:w-350 h-auto shadow-md backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
                <img
                  src=""
                  alt=""
                  className="w-40"
                />
            </div>
        </div>
    </div>
  );
};

export default RowContainer