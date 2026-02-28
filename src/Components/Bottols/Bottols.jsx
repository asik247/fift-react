import React, { use } from 'react';
import Bottol from '../Bottol/Bottol';

const Bottols = ({bottolsPromise}) => {
    const bottosDatas = use(bottolsPromise)
    console.log(bottosDatas);
    return (
        <div>
            {
                bottosDatas.map(bottol=><Bottol bottol={bottol}></Bottol>)
            }
        </div>
    );
};

export default Bottols;