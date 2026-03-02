import React, { use, useEffect, useState } from 'react';
import Bottol from '../Bottol/Bottol';
import { addCart, getCart, removeCart } from '../../Utilitys/LocalStroge';
import Carts from '../Carts/Carts';

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

    // Add to cart delete handle code start here;

    const handleDeleteCart = (id) => {
        console.log("handle delete carts", id);
        const remianingCart = purces.filter(bottole => bottole.id !== id)
        setParces(remianingCart)
        removeCart(id)
    }

    // Add to cart delete handle code end here;
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
    // UseEffect use and get data log stroge;


    return (
        <div >
            <h1 className='font-bold text-2xl text-center mt-5'>Add Cart: {purces.length}</h1>
            {/* add to cart show carts components */}
            <Carts purces={purces} handleDeleteCart={handleDeleteCart} ></Carts>

            <div className='grid md:grid-cols-3 gap-6 w-11/12 mx-auto mt-30'>

                {
                    bottosDatas.map(bottol => <Bottol key={bottol.id} bottol={bottol} handlePurces={handlePurces}></Bottol>)
                }
            </div>
        </div>
    );
};

export default Bottols;