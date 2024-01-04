import React from 'react';

function btn({btnText}) {
    return (
        <div>
          <button className='shadow-lg items-center justify-center'>{btnText}</button>
        </div>
    );
}

export default btn;