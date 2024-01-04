import React from 'react';
import Btn from './btn';

function navbar() {
    return (
        <div>
            <nav className='w-full h-28 shadow-xl bg-white flex flex-wrap flex-row justify-around '>
        <div className='justify-center p-6 items-center'>
          <img src="logo.png" className='h-14' />
        </div>
        <div className='flex flex-wrap justify-evenly items-center font-semibold m-2 '>
          <h2 className='m-3'>Home </h2>
          <h2 className='m-3'>About </h2>
          <h2 className='m-3'>Services </h2>
          <h2 className='m-3'>Blogs </h2>
          <h2 className='m-3'>Contact Us</h2>
        </div>
        <div className='flex flex-wrap justify-around ' >
            <Btn btnText='Contact Us'/>
        </div>
      </nav>
        </div>
    );
}

export default navbar;