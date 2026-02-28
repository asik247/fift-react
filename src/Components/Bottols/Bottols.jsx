import React, { use } from 'react';

const Bottols = ({bottolsPromise}) => {
    const bottosDatas = use(bottolsPromise)
    console.log(bottosDatas);
    return (
        <div>
            
        </div>
    );
};

export default Bottols;