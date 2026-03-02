import React, { use, useEffect, useState } from 'react';
import Bottol from '../Bottol/Bottol';
import { addCart, getCart } from '../../Utilitys/LocalStroge';

const Bottols = ({ bottolsPromise }) => {
    // Buy Now btn relative state and code start here;
    const [purces, setParces] = useState([]);
    const handlePurces = (bottol) => {
        // console.log("purcesh btn clicked",bottol);
        const newData = [...purces, bottol]
        setParces(newData)
        // bottol id lg stroge a sent;
        addCart(bottol.id)
        // console.log(bottol);
    }
    // Buy Now btn relative state and code end here;
    const bottosDatas = use(bottolsPromise)
    // console.log(bottosDatas);

    // UseEffect use and get data log stroge;
    useEffect(() => {
        const stroedCartId = getCart();
        // console.log(stroedCartId,bottosDatas)
        const matchIdCart = [];
        for (const id of stroedCartId) {
            // console.log(id);
            const singleCart = bottosDatas.find(bottle => bottle.id === id);
            if (singleCart) {
                matchIdCart.push(singleCart);
            }
        }
        // console.log('stored cart', matchIdCart);
        setParces(matchIdCart)
        // all bottols find and single bottol;

    }, [bottosDatas])

    return (
        <div >
            <h1 className='font-bold text-2xl text-center mt-5'>Add Cart: {purces.length}</h1>
            {/* <h1>Iam bottols {purces.length}</h1> */}
            <div className='grid md:grid-cols-3 gap-6 w-11/12 mx-auto mt-30'>

                {
                    bottosDatas.map(bottol => <Bottol key={bottol.id} bottol={bottol} handlePurces={handlePurces}></Bottol>)
                }
            </div>
        </div>
    );
};

export default Bottols;