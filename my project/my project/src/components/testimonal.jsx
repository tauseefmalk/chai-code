import React from 'react';

function testimonal({name, type}) {
    return (
        <div>
          <div className='border p-4 m-20'>
            <img src="client1.png" alt="" />
            <h1 className='my-4 font-bold'>{name}</h1>
            <p className='text-blue-800 font-bold text-5xl'>{type}</p>
            <p className='text-slate-600'>xito stands as the epitom of excellence </p>
          </div>
        </div>
    );
}

export default testimonal;