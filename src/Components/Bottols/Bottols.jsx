import React, { use } from 'react';
import Bottol from '../Bottol/Bottol';

const Bottols = ({bottolsPromise}) => {
    const bottosDatas = use(bottolsPromise)
    console.log(bottosDatas);
    return (
        <div className='grid md:grid-cols-3 gap-6 w-11/12 mx-auto mt-30'>
            {
                bottosDatas.map(bottol=><Bottol bottol={bottol}></Bottol>)
            }
        </div>
    );
};

export default Bottols;