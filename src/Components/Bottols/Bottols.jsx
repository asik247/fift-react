import React, { use } from 'react';

const Bottols = ({bottolsPromise}) => {
    const bottosDatas = use(bottolsPromise)
    console.log(bottosDatas);
    return (
        <div>
            {
                bottosDatas.map(bottol=>console.log(bottol))
            }
        </div>
    );
};

export default Bottols;