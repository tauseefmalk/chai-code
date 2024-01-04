import React from 'react';

function post({thumbnail}) {
    return (
        <div>
          <div className='border p-4 m-20'>
            <img src="Blog-Image.png" alt="" />
            <p className='flex flex-wrap justify-start text-slate-600 my-4'>{thumbnail}</p>
            <p className='text-blue-800 font-bold text-5xl'>Lorem ipsum </p>
          </div>
        </div>
    );
}

export default post;