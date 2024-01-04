import React from 'react';

function servs({content}) {
    return (
        <div>
            <div className='border p-4 m-20'>
            <img src="sm-marketing.svg" alt="" />
            <h1 className='my-6 font-bold'>{content}</h1>
            <p className='text-slate-600'>xito stands as the epitom of excellence </p>
          </div>
        </div>
    );
}

export default servs;