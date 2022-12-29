import React from 'react';
import { Circles } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='mt-32 w-1/6 mx-auto'>
        <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
            </div>
    );
};

export default Spinner;