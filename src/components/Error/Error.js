import React from 'react';
import error from '../../image/error.png'

const Error = () => {
    return (
        <div className='text-center'>
            <img src={error} style={{ maxHeight: "500px" }}
          alt="" className='img-fluid'/>
          
        </div>
    );
};

export default Error;