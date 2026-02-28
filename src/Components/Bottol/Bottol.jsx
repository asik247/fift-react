import React from 'react';

const Bottol = ({ bottol }) => {
    const { id, brand, type, color, price_usd, img_url, in_stock } = bottol;

    return (
        <div className="w-full">
            <div className="card bg-base-100 w-full h-[420px] shadow-md">
                
                {/* Image Section */}
                <figure className="h-[300px] overflow-hidden">
                    <img 
                        className="w-full h-full object-cover"
                        src={img_url} 
                        alt={brand}
                    />
                </figure>

                {/* Body Section */}
                <div className="card-body p-4 flex flex-col justify-between">
                    
                    <div>
                        <h2 className="card-title text-lg font-bold">
                            {brand}
                            <div className="badge badge-secondary ml-2">
                                {in_stock ? "In Stock" : "Sold Out"}
                            </div>
                        </h2>

                        <p className="text-sm text-gray-500">
                            {type} • {color}
                        </p>

                        <p className="font-semibold mt-2">
                            ${price_usd}
                        </p>
                    </div>

                    <div className="card-actions justify-end mt-4">
                        <div className="badge badge-outline">{type}</div>
                        <div className="badge badge-outline">{color}</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bottol;