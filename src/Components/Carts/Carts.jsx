import React from 'react';

const Carts = ({ purces,handleDeleteCart }) => {
    console.log(purces);
    return (
        <div className='grid md:grid-cols-4 gap-4 border-b-2 p-5'>
            {
                purces.map(cart => <div key={cart.id}>
                    <figure className="h-[300px] overflow-hidden">
                        <img
                            className="w-full h-full object-cover"
                            src={cart.img_url}
                            alt={cart.brand}
                        />

                    </figure>
                    <button onClick={()=>handleDeleteCart(cart.id)} className='btn '>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Carts;