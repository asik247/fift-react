import React, { use, useState } from 'react';
import Bottol from '../Bottol/Bottol';
import { addCart } from '../../Utilitys/LocalStroge';

const Bottols = ({bottolsPromise}) => {
    // Buy Now btn relative state and code start here;
    const [purces,setParces] = useState([]);
    const handlePurces = (bottol) =>{
        // console.log("purcesh btn clicked",bottol);
        const newData = [...purces,bottol]
        setParces(newData)
        addCart(bottol.id)
    }
    // Buy Now btn relative state and code end here;
    const bottosDatas = use(bottolsPromise)
    // console.log(bottosDatas);
    return (
        <div className='grid md:grid-cols-3 gap-6 w-11/12 mx-auto mt-30'>
           <h1>Iam bottols {purces.length}</h1>
           
            {
                bottosDatas.map(bottol=><Bottol key={bottol.id} bottol={bottol} handlePurces={handlePurces}></Bottol>)
            }
        </div>
    );
};

export default Bottols;